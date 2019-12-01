export default {
    changeLoanPeriod: ({ commit }, payload) => {
        commit('changeLoanPeriod', payload)
    },
    changeloanAmount: ({ commit }, payload) => {
        commit('changeloanAmount', payload)
    },
    calculateLoan: ({ commit }, dataForCalculation) => {
        let amount = dataForCalculation.amount;
        let interestRate = dataForCalculation.interestRate;
        let months = dataForCalculation.months;
        let interest = (amount * (interestRate * 0.01)) / months;
        let montlyPaymentValue = (amount / months + interest).toFixed(2);
        commit('calculateLoan', montlyPaymentValue)
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


    createCurrencyData: ({ commit }, payload) => {
        let data = payload,
            gelInterests = [],
            dollarInterests = [],
            eurInterests = [];
            // choosenCurrencyId = 0;
       
        for (let bank of data) {
            if (bank.checked == true) {
                gelInterests.push(bank.gel ),
                dollarInterests.push(bank.dollar ),
                eurInterests.push(bank.eur );
                // choosenCurrencyId = bank.choosenCur

            }
        }

        gelInterests = Math.min.apply(Math, gelInterests),
        dollarInterests =  Math.min.apply(Math, dollarInterests),
        eurInterests =  Math.min.apply(Math, eurInterests);
        
        let currencyArray = [
            { id: 0, interest: gelInterests, name: 'GEL', symbol: '₾', checked: true },
            { id: 1, interest: dollarInterests, name: 'USD', symbol: '$', checked: false },
            { id: 2, interest: eurInterests, name: 'EUR', symbol: '€', checked: false },
        ]
      
        let choosenCurrencyId = 0;
        
        for (let item of currencyArray) {
            if(item.checked === true) {
                choosenCurrencyId = item.interest
            }
        }
   
        commit('createCurrencyData', currencyArray)
        commit('setChoosenCurrencyId', choosenCurrencyId)
    },
}