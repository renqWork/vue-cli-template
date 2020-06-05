const state = {
  tabs: [
    {
      name: "处理中心",
    },
    {
      name: "月子中心",
      children: [
        { name: "选项1" },
        { name: "选项2" },
        { name: "选项3" },
        { name: "选项4", children: [{ name: "选项1" }, { name: "选项2" }] },
      ],
    },
    {
      name: "处理中心",
    },
    {
      name: "处理中心",
    },
    {
      name: "处理中心",
    },
    {
      name: "处理中心",
    },
    {
      name: "处理中心",
    },
  ],
};

const mutations = {
  SET_TABS: (state, tabs) => {
    state.tabs = tabs;
  },
};

const actions = {
  setTabs({ commit }, log) {
    commit("SET_TABS", log);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
