import { ActionTree } from "vuex";
import { IExampleState, IExampleActions } from "@/store/interfaces";
import { IRootState } from "@/store/interfaces";

export const actions: ActionTree<IExampleState, IRootState> &
  IExampleActions = {
  exampleAction({ commit }): void {
    commit("exampleMutation", "example");
  },
};

export default actions;
