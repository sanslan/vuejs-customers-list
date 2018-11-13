<template>
    <div class="card" >
        <div class="card-image">
            <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" :id="customer.id">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" :id="customer.id">
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">{{ customer.name }}</p>
                <p class="subtitle is-6">{{ customer.email}}</p>
            </div>
            </div>

            <div class="content">
                {{ customer.desc}}
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
            <button @click='deleteCustomer(customer.id)' class="button is-danger is-pulled-left">Delete</button>
            <button @click='editCustomer(customer)'  class="button is-link is-pulled-right">Edit</button>
        </div>
    </div>
</template>

<script>
import { storage } from '../firebase/firebase'
var storageRef = storage.ref();
export default {
    props: ['customer'],
    name: 'Customer',

    methods: {
        deleteCustomer(id){
            this.$store.commit('deleteCustomer',id);
            var imageRef = storageRef.child(this.customer.id);
            imageRef.delete();
        },
        editCustomer(customer){
            this.$store.state.selectedCustomer=customer;
            this.$router.push('/add');
        }
    },
    created: function(){
        var imageRef = storageRef.child(this.customer.id);
        var customerID = this.customer.id;
        imageRef.getDownloadURL().then(function(url){

            document.getElementById(customerID).src = url;

        })
    }
}
</script>
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
