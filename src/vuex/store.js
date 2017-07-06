import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex)

// the root, initial state object
const state = {
	hcCount: 0,
	hcList: []
}

// define the possible mutations that can be applied to our state
const mutations = {
	SET_HC_COUNT (state, count) {
		state.hcCount = count;
	},
	SET_HC_LIST (state, list) {
		state.hcList = list;
	}
}

const getters = {
	hcCount: state => state.hcCount,
	hcList: state => state.hcList,
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
