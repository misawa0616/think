import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {

    window.onNuxtReady(() => {
        createPersistedState({
            key: 'my-key',
            storage: window.sessionStorage
        })(store)
    })
}