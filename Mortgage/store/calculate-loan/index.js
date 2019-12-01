import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const state = {
    data: [],
    currency: [
        { id: 0, name: 'GEL', symbol: '₾', checked: true },
        { id: 1, name: 'USD', symbol: '$', checked: false },
        { id: 2, name: 'EUR', symbol: '€', checked: false },
    ],
    choosenCurrencyId: 0,
    choosenBanksId: [0, 1],
    loanAmount: 100,
    loanPeriod: 1,
    interestRate: 0.0,
    montlyPayment: 0,

    showCalculator: true,
    showBankChoose: false,
    showInfoForm: false
}


export default {
    state,
    actions,
    mutations,
    getters
}