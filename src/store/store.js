import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import {db} from '../firebase/firebase';

export const store = new Vuex.Store({
    state: {
        customers: [],
        selectedCustomer: null
    },
    mutations: {
        getCustomers: function(state){
            state.customers = [];
            db.collection("customers").get().then((querySnapshot) => {
                return querySnapshot.forEach((doc) => {
                    var customer = doc.data();
                    customer.id = doc.id;
                    state.customers.push(customer);
                });
            });
        },
        deleteCustomer: function(state,id){
            db.collection("customers").doc(id).delete().then(() =>{
                location.reload()
            })
            
        }
    }

});