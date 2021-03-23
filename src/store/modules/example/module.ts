import { Module } from "vuex";
import { IExampleState, IRootState } from "@/store/interfaces";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import state from "./state";

export const example: Module<IExampleState, IRootState> = {
  actions,
  mutations,
  getters,
  state,
};

export default example;
