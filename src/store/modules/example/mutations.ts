import { MutationTree } from "vuex";
import { IExampleState, IExampleMutations } from "@/store/interfaces";

export const mutations: MutationTree<IExampleState> & IExampleMutations = {
  exampleMutation(state: IExampleState, payload: string): void {
    state.example = payload;
  },
};

export default mutations;
