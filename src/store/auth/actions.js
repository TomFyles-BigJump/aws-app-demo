import router from '../../router';

export const setTokens = ({commit}, tokens) => {
    window.localStorage.setItem("tokens", JSON.stringify(tokens));
    commit('setTokens', tokens);
    router.replace("/");
}