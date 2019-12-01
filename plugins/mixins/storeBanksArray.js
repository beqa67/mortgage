export default {
    methods: {
        storeBanksArray() {
            for (let bank of this.loadData.banks) {
              this.loadBanks.push({
                id: bank.id,
                name: bank.display_name,
                img: bank.image,
                checked: false,
                gel: bank[1],
                dollar: bank[2],
                eur: bank.percent_eur,
                // choosenCur: bank[1]
              });
         
              for (let bank of this.loadBanks) {
                if (this.choosenBanksId.includes(bank.id)) {
                  bank.checked = true;
                  // if(choosenCurrency != undefined) {
                  //     bank.choosenCur = choosenCurrency
                  // }
                }
              }
            }
            this.$store.commit("storeBanksArray", this.loadBanks);
            this.$store.dispatch('createCurrencyData', this.loadBanks)
          },
        },
    }
