/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */

export const state = () => ({
  dark: false,
});

export const getters = {
  dark: (state) => state.dark,
};

export const mutations = {
  change(state) {
    state.dark = !state.dark;
  },
};

export const actions = {
  changeMode({ commit }) {
    commit('change');
  },
};
