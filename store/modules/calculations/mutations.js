export default {


    load: (state, payload) => {
        state.data = payload
    },
    changeLoanPeriod: (state, payload) => {
        state.loanPeriod = payload
    },
    changeloanAmount: (state, payload) => {
        state.loanAmount = payload
    },
    calculateLoan: (state, payload) => {
        state.montlyPayment = payload
    },
    setInterestRate: (state, payload) => {
        state.interestRate = payload
    },
    setChoosenCurrencyId: (state, payload) => {
        state.choosenCurrencyId = payload
    },
    setChoosenCurrency: (state, payload) => {
        state.currency = payload
    },
    setChoosenBanksId: (state, payload) => {
        state.choosenBanksId = payload
    },


    storeBanksArray: (state, payload) => {
        state.banks = payload
    },


    createCurrencyData:(state, payload) => {
        state.currency = payload
    }

}


