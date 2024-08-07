import { type Store, store, setStore } from "@/store";
import { Show, createEffect } from "solid-js";
import { __PROD__ } from "@/constants";

if (!__PROD__) {
  setTimeout(() => {
    window.dispatchEvent(
      new MessageEvent("message", {
        data: {
          action: "UPDATE_COORDS",
          source: "interface",
          data: { x: 23, y: 24, z: 534 },
        },
      }),
    );
  }, 2500);
}

export default function App() {
  createEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const { source, action, data } = event.data;
      if (source != "interface") return;

      switch (action) {
        case "UPDATE_COORDS":
          setStore("coords", data);
          break;
        default:
          throw new Error(`Unhandled UI action: ${action}`);
          break;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  });

  return (
    <div class="absolute left-0 top-0 flex h-screen w-full items-center justify-center">
      <Show when={store.visible}>
        <div class="flex rounded-md bg-neutral-800 p-4 text-white">
          <pre>{JSON.stringify(store.coords)}</pre>
        </div>
      </Show>
    </div>
  );
}
