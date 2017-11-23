import dva from 'dva';


export default {

  namespace: 'examples',

  state: [],

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    'delete'(state, {payload:id}) {
      return state.filter(item => item.id !== id );
    },
  },

};
