import axios from 'axios';

export default function({params, store}) {
    return axios.get(`https://api-squad1.livo.ge/v1/mortgage`)
        .then((response) => {
            store.commit('load', response.data.data)
        });
}