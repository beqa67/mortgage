export default {

    loadData: (state) => {
        return state.data
    },
    banks: (state) => {
        return state.banks
    },
    banksCurrencies: (state) => {
        return state.banks.currencies
    },
    loanAmount: (state) => {
        return state.loanAmount
    },
    loadCurrency: (state) => {
        return state.currency
    },
    interestRate: (state) => {
        return state.interestRate
    },
    loanPeriod: (state) => {
        return state.loanPeriod
    },
    montlyPayment: (state) => {
        return state.montlyPayment
    },
    choosenBanksId: (state) => {
        return state.choosenBanksId
    },
    choosenCurrencyId: (state) => {
        return state.choosenCurrencyId
    },
    
}