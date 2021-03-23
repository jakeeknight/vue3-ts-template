import { IRootState } from "@/store/interfaces";
import { ActionContext } from "vuex";

export interface IExampleState {
  example: string;
}

export interface IExampleActions {
  exampleAction({ commit }: AugmentedActionContext): void;
}

export interface IExampleMutations<S = IExampleState> {
  exampleMutation(state: S, payload: string): void;
}

export interface IExampleGetters {
  exampleGetter(state: IExampleState): string;
}

type AugmentedActionContext = {
  commit<K extends keyof IExampleMutations>(
    key: K,
    payload: Parameters<IExampleMutations[K]>[1]
  ): ReturnType<IExampleMutations[K]>;
} & Omit<ActionContext<IExampleState, IRootState>, "commit">;
