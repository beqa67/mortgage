import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    strict: true,
    state: () => ({
      loader: true,
      data: [],
      currency: [
        { id: 0, name: 'GEL', symbol: '₾', checked: true },
        { id: 1, name: 'USD', symbol: '$', checked: false },
        { id: 2, name: 'EUR', symbol: '€', checked: false },
      ],
      choosenCurrencyId: 0,
      choosenBanksId: [2],
      loanAmount: 1000,
      loanPeriod: 20,
      interestRate: 0.0,
      montlyPayment: 0,
      showCalculator: true,
      showBankChoose: false,
      showInfoForm: false,
      showMobileCalculator: false,
      showMobileBankChoose: false,
      showMobileInfoForm: false,
      mobileVersion: false
    }),
    getters: {
      loadData(state) {
        return state.data
      },
      loanAmount(state) {
        return state.loanAmount
      },
      loadCurrency(state) {
        return state.currency
      },
      interestRate(state) {
        return state.interestRate
      },
      loanPeriod(state) {
        return state.loanPeriod
      },
      montlyPayment(state) {
        return state.montlyPayment
      },
      choosenBanksId(state) {
        return state.choosenBanksId
      },
      choosenCurrencyId(state) {
        return state.choosencurrencyId
      },
      loader(state) {
        return state.loader
      },
      mobileVersion(state) {
        return state.mobileVersion
      },

    },
    mutations: {
      load(state, payload) {
        state.data = payload
      },
      changeLoanPeriod(state, payload) {
        state.loanPeriod = payload
      },
      changeloanAmount(state, payload) {
        state.loanAmount = payload
      },
      calculateLoan(state, payload) {
        state.montlyPayment = payload
      },

      showCalculator(state, payload) {
        state.showCalculator = payload
      },
      showBankChoose(state, payload) {
        state.showBankChoose = payload
      },
      showInfoForm(state, payload) {
        state.showInfoForm = payload
      },
      showMobileCalculator(state, payload) {
        state.showMobileCalculator = payload
      },
      showMobileBankChoose(state, payload) {
        state.showMobileBankChoose = payload
      },
      showMobileInfoForm(state, payload) {
        state.showInfoForm = payload
      },

      setInterestRate(state, payload) {
        state.interestRate = payload
      },
      setChoosenCurrencyId(state, payload) {
        state.choosenCurrencyId = payload
      },
      setChoosenCurrency(state, payload) {
        state.currency = payload
      },

      setChoosenBanksId(state, payload) {
        state.choosenBanksId = payload
      },

      loader(state, payload) {
        state.loader = payload
      },
      mobileVersion(state, payload) {
        state.mobileVersion = payload
      },
    },
    actions: {
      changeLoanPeriod({ commit }, payload) {
        commit('changeLoanPeriod', payload)
      },
      changeloanAmount({ commit }, payload) {
        commit('changeloanAmount', payload)
      },
      calculateLoan({ commit }, dataForCalculation) {
        
        let amount = dataForCalculation.amount;
        let interestRate = dataForCalculation.interestRate;
        let months = dataForCalculation.months;
        let interest = (amount * (interestRate * 0.01)) / months;
        let montlyPaymentValue = (amount / months + interest).toFixed(2);
        console.log(dataForCalculation)
        commit('calculateLoan', montlyPaymentValue)
      },
      showCalculator({ commit }) {
        commit('showCalculator', true)
        commit('showBankChoose', false)
        commit('showInfoForm', false)
      },
      showBankChoose({ commit }) {
        commit('showCalculator', false)
        commit('showBankChoose', true)
        commit('showInfoForm', false)
      },
      showInfoForm({ commit }) {
        commit('showCalculator', false)
        commit('showBankChoose', false)
        commit('showInfoForm', true)
      },
      showMobileCalculator({ commit }) {
        commit('showMobileCalculator', true)
        commit('showMobileBankChoose', false)
        commit('showMobileInfoForm', false)
      },
      showMobileBankChoose({ commit }) {
        commit('showMobileCalculator', false)
        commit('showMobileBankChoose', true)
        commit('showMobileInfoForm', false)
      },
      showMobileInfoForm({ commit }) {
        commit('showMobileCalculator', false)
        commit('showMobileBankChoose', false)
        commit('showMobileInfoForm', true)
      },
      setInterestRate({ commit }, payload) {
        commit('setInterestRate', payload)
      },

      setChoosenCurrency({ commit }, payload) {
        commit('setChoosenCurrency', payload)
      },
      setChoosenCurrencyId({ commit }, payload) {
        commit('setChoosenCurrencyId', payload)
      },
    }
  })
}

export default createStore







// import Vuex from 'vuex';
// import module1 from './calculate-loan';

// const createStore = () => {
//   return new Vuex.Store({
//     namespaced: true,
//     modules: {
//       module1
//     }
//   });
// };

// export default createStore