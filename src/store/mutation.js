export const mutations = {
  SIGN_IN(state, payload) {
    state.myCustomer = payload;
  },
  OWNER_SIGN_IN(state, payload) {
    state.curOwner = payload;
  },
  OWNER_SIGN_OUT(state) {
    state.curOwner = {};
  },
  SEARCH_HOTEL(state, payload) {
    state.hotel = payload;
  },
  OWNER_UPDATE(state, payload) {
    state.curOwner = payload;
  },
}