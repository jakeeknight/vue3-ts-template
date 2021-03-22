import { ActionContext } from "vuex";

export interface IRootState {
  version: string;
  hello: string;
}

export interface IRootActions {
  helloWorld({ commit }: AugmentedActionContext): void;
}

export interface IRootMutations<S = IRootState> {
  helloCommit(state: S, payload: string): void;
}

export interface IRootGetters {
  helloGetter(state: IRootState): string;
}

type AugmentedActionContext = {
  commit<K extends keyof IRootMutations>(
    key: K,
    payload: Parameters<IRootMutations[K]>[1]
  ): ReturnType<IRootMutations[K]>;
} & Omit<ActionContext<IRootState, IRootState>, "commit">;
