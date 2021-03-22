import { GetterTree } from "vuex";
import { IRootState } from "@/store/interfaces";
import { IRootGetters } from "./interfaces";

export const getters: GetterTree<IRootState, IRootState> & IRootGetters = {
  helloGetter(): string {
    return "hello world";
  },
};

export default getters;
