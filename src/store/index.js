import { createStore } from 'vuex'

export default createStore({
    state: {
        isCollapse: true,
    },
    mutataions: {
        updateIsCollapse(state, payload) {
            state.isCollapse = !state.isCollapse
        }
    }
})