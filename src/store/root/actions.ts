import { ActionTree } from "vuex";
import { IRootState, IRootActions } from "@/store/interfaces";

export const actions: ActionTree<IRootState, IRootState> & IRootActions = {
  helloWorld({ commit }): void {
    commit("helloCommit", "hello world");
  },
};

export default actions;
