export default {
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
    showMobileCalculator: ({ commit }) => {
        commit('showMobileCalculator', true)
        commit('showMobileBankChoose', false)
        commit('showMobileInfoForm', false)
    },
    showMobileBankChoose: ({ commit }) => {
        commit('showMobileCalculator', false)
        commit('showMobileBankChoose', true)
        commit('showMobileInfoForm', false)
    },
    showMobileInfoForm: ({ commit }) => {
        commit('showMobileCalculator', false)
        commit('showMobileBankChoose', false)
        commit('showMobileInfoForm', true)
    },
}