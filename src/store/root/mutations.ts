import { MutationTree } from "vuex";
import { IRootState, IRootMutations } from "@/store/interfaces";

export const mutations: MutationTree<IRootState> & IRootMutations = {
  helloCommit(state: IRootState, payload: string): void {
    state.hello = payload;
  },
};

export default mutations;
