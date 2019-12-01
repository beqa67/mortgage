import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const state = {
    showCalculator: true,
    showBankChoose: false,
    showInfoForm: false,
    showMobileCalculator: false,
    showMobileBankChoose: false,
    showMobileInfoForm: false,
    loader: false,
    mobileVersion: false
}


export default {
    state,
    actions,
    mutations,
    getters
}