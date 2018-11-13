<template>
    <div class="container">
        <h2 class="title is-1">List of customers</h2>
        <Customer v-on:delete-customer="deleteCustomer"  :customer='customer' :key='i' v-for='(customer,i) in customers'></Customer>
    </div>
    
</template>

<script>
import Customer from './Customer'

export default {
    name: 'CustomersList',
    computed: {
        customers(){
            return this.$store.state.customers
        }
    },
    components: {
        Customer
    },
    methods: {
        deleteCustomer(customer) {
            const customerIndex = this.customers.indexOf(customer);
            this.customers.splice(customerIndex, 1);
        },
        getCustomerList(){
            this.$store.commit('getCustomers');
        }
    },
    created: function(){
        this.getCustomerList();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
    width: 23%;
    display: inline-block;
    margin: 0 1%;
    margin-bottom: 20px;
}
.container{
    margin-top: 50px;
}
h2{
    text-align: center;
    margin-bottom: 40px;
    color: #42b983;
}
button{
    width: 80px;
    margin-bottom: 15px;
}
</style>
