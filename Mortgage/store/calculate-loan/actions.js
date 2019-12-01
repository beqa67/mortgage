export default {
    load: (state, payload) => {
        state.data = payload
    },

    changeLoanPeriod: ({ commit }, payload) => {
        commit('changeLoanPeriod', payload)
    },

    changeloanAmount: ({ commit }, payload) => {
        commit('changeloanAmount', payload)
    },

    calculateLoan: ({ commit }, payload) => {
        commit('calculateLoan', payload)
    },

    showCalculator: ({ commit }) => {
        commit('showCalculator', true)
        commit('showBankChoose', false)
        commit('showInfoForm', false)
    },

    showBankChoose: ({ commit }) => {
        commit('showCalculator', false)
        commit('showBankChoose', true)
        commit('showInfoForm', false)
    },

    showInfoForm: ({ commit }) => {
        commit('showCalculator', false)
        commit('showBankChoose', false)
        commit('showInfoForm', true)
    },

    setInterestRate: ({ commit }, payload) => {
        commit('setInterestRate', payload)
    },

    setChoosenCurrency: ({ commit }, payload) => {
        commit('setChoosenCurrency', payload)
    },
    
    setChoosenCurrencyId: ({ commit }, payload) => {
        commit('setChoosenCurrencyId', payload)
    },
}