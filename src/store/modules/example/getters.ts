import { GetterTree } from "vuex";
import { IExampleState } from "@/store/interfaces";
import { IExampleGetters } from "./interfaces";
import { IRootState } from "@/store/interfaces";

export const getters: GetterTree<IExampleState, IRootState> &
  IExampleGetters = {
  exampleGetter(state: IExampleState): string {
    return state.example;
  },
};

export default getters;
