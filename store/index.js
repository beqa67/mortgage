import Vuex from 'vuex';
import layout from './modules/layout';
import calculations from './modules/calculations';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      layouts: layout,
      calculations
    }
  });
};

export default createStore