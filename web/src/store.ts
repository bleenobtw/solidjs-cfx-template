import { createStore } from "solid-js/store";

export interface Store {
  visible: boolean;
  coords: { x: number; y: number; z: number };
  isLoading: boolean;
}

const INITIAL_STATE: Store = {
  coords: { x: 0, y: 0, z: 0 },
  isLoading: false,
  visible: true,
};

export const [store, setStore] = createStore<Store>(INITIAL_STATE);
