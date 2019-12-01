import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const state = {

  data: [],
  banks: [],
  currency: [],
  choosenCurrencyId: undefined,
  choosenBanksId: [1],
  loanAmount: 1000,
  loanPeriod: 20,
  interestRate: 0.0,
  montlyPayment: 0,

}


export default {
  state,
  actions,
  mutations,
  getters
}