import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { IRootState } from "@/store/interfaces";

import root from "./root";
import { example } from "./modules/index";

export const key: InjectionKey<Store<IRootState>> = Symbol();

export const store = createStore<IRootState>({
  ...root,
  modules: {
    example,
  },
});

export function useStore(): Store<IRootState> {
  return baseUseStore(key);
}
