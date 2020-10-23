/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import * as vehiclesApi from '@/api/request.js';

export const state = () => ({
  items: [],
  loaded: false,
});

export const getters = {
  all: (state) => state.items,
  one: (state) => (name) => state.items.find((item) => item.name === name),
  loading: (state) => state.loading,
  types(state) {
    const arr = [];
    for (const item of state.items) {
      arr.push(item.type);
    }

    return [...new Set(arr)];
  },
};

export const mutations = {
  setItems(state, items) {
    state.items = items;
    state.loaded = true;
  },
  add(state, item) {
    if (!state.items.includes(item)) {
      state.items.push(item);
    }
  },
};

export const actions = {
  async load({ state, commit }) {
    if (!state.loaded) {
      const vehicles = await vehiclesApi.getVehicles();
      commit('setItems', vehicles);
      return vehicles;
    }
  },
  addVehicle({ commit }, item) {
    commit('add', item);
  },
};
