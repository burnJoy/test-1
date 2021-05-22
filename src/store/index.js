import Vue from "vue";
import Vuex from "vuex";

import apiLocalStorage from "@/api.js";

Vue.use(Vuex);

// Возьмем юзерские сетинги напрямую из localStorage чтобы тема грузилась сразу та что нужно
const isDark = localStorage.getItem("state")
  ? JSON.parse(localStorage.getItem("state")).isDark
  : false;

export default new Vuex.Store({
  state: {
    isDark,
    messages: [],
    isLoading: false,
  },

  mutations: {
    SET_THEME(state, isDark) {
      state.isDark = isDark;
    },

    ADD_MESSAGE(state, payload) {
      state.messages.unshift(payload);
    },

    ADD_MESSAGE_COMMENT(state, { messageId, comment }) {
      const message = state.messages.find((item) => item.id === messageId);
      // добавляем в массив или созадем и добавляем
      message.comments = [...(message.comments || []), comment];
    },

    SET_LOADER(state, isLoading) {
      state.isLoading = isLoading;
    },

    SET_STATE(state, localStorageJson) {
      // записываем в тор по каждому ключу
      if (localStorageJson) {
        const localStorage = JSON.parse(localStorageJson);
        Object.entries(localStorage).forEach(([key, value]) => {
          state[key] = value;
        });
      }
    },
  },
  actions: {
    changeTheme({ commit, state }, isDark) {
      commit("SET_THEME", isDark);
      // меняем напрмую потому что это просто персонализация
      localStorage.setItem("state", JSON.stringify({ ...state, isDark }));
    },

    createMessage({ commit }, payload) {
      // идем по апи, если успех добавляем в стейт
      return apiLocalStorage.addMessage(payload).then(() => {
        commit("ADD_MESSAGE", payload);
      });
    },

    creteComment({ commit }, payload) {
      return apiLocalStorage.addComment(payload).then(() => {
        commit("ADD_MESSAGE_COMMENT", payload);
      });
    },

    getLocalStoregaState({ commit }) {
      commit("SET_LOADER", true);
      // имитация запроса на сервер
      apiLocalStorage
        .getState()
        .then((response) => {
          commit("SET_STATE", response);
        })
        .finally(() => {
          commit("SET_LOADER", false);
        });
    },
  },

  getters: {
    getPopularArticles(state) {
      return [...state.messages]
        .sort((a, b) => {
          return b.comments?.length - a.comments?.length;
        })
        .splice(0, 3);
    },
  },
  modules: {},
});
