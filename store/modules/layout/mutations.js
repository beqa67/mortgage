export default {

    showCalculator: (state, payload) => {
        state.showCalculator = payload
    },
    showBankChoose: (state, payload) => {
        state.showBankChoose = payload
    },
    showInfoForm: (state, payload) => {
        state.showInfoForm = payload
    },
    showMobileCalculator: (state, payload) => {
        state.showMobileCalculator = payload
    },
    showMobileBankChoose: (state, payload) => {
        state.showMobileBankChoose = payload
    },
    showMobileInfoForm: (state, payload) => {
        state.showInfoForm = payload
    },

    setChoosenCurrencyVal: (state, payload) => {
        state.choosenCurrencyVal = payload
    },
    loader: (state, payload) => {
        state.loader = payload
    },
    mobileVersion: (state, payload) => {
        state.mobileVersion = payload
    },

}


