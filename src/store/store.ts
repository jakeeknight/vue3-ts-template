import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { IRootState } from "@/store/interfaces";
import root from "./root";

export const key: InjectionKey<Store<IRootState>> = Symbol();

export const store = createStore<IRootState>({
  ...root,
});

export function useStore(): Store<IRootState> {
  return baseUseStore(key);
}
