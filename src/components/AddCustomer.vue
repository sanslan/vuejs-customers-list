<template>
    <div class="container">
        <h2 class="title is-1">Add new customer</h2>
        <div class="field">
            <label class="label">Fullname</label>
            <div class="control">
                <input class="input" v-model='customer.name' type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" v-model='customer.email' type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Description</label>
            <div class="control">
                <textarea v-model='customer.desc' class="textarea" placeholder="Textarea"></textarea>
            </div>
        </div>

        <div class="field">
            <label class="label">Category</label>
            <div class="control">
                <div class="select">
                <select v-model='customer.category'>
                    <option :value='category' :key='category' v-for='category in categories' >Category {{ category }}</option>
                </select>
                </div>
            </div>
        </div>

        <div class="field">
            <label class="label">Sex</label>
            <div class="control">
                <label class="radio">
                <input value='Man' v-model='customer.sex' type="radio" name="question">
                Man
                </label>
                <label class="radio">
                <input value='Woman' v-model='customer.sex'  type="radio" name="question">
                Woman
                </label>
            </div>
        </div>
        <h3><strong>Customer picture</strong></h3>
        <div class="file">
            <label class="file-label">
                <input class="file-input" type="file" ref="file">
                <span class="file-cta">
                <span class="file-icon">
                    <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                    Select file
                </span>
                </span>
            </label>
        </div>
        <div class="field">
            <div class="control" v-if="!this.$store.state.selectedCustomer">
                <button @click.prevent='addCustomer' class="button is-success  is-fullwidth">Save customer</button>
            </div>
            <div v-else class="control">
                <button @click.prevent='updateCustomer' class="button is-link  is-fullwidth">Update customer</button>
                <button @click.prevent='cancelEdit' class="button is-danger  is-fullwidth">Cancel</button>
            </div>
        </div>
        <hr>
    </div>

</template>

<script>
import { db, storage } from '../firebase/firebase';
const storageRef = storage.ref();

export default {
  name: 'AddCustomer',
    data: function(){
      return {
        categories: ['A','B','C'],
      }
    },
    computed: {
        customer: function(){
            if(this.$store.state.selectedCustomer){
                return this.$store.state.selectedCustomer
            }
            return {name: '',email: '',desc: '',category: '',sex: ''}
        }
    },
    methods: {
        addCustomer(){
            var userPic = this.$refs.file.files[0];
            db.collection("customers").add(this.customer).then((data) =>{
                    var picRef = storageRef.child(data.id);
                    picRef.put(userPic)
                })
                this.$router.push('/');
        },
        cancelEdit(){
            this.$store.state.selectedCustomer = null;
            this.$router.push('/');
        },
    },
    watch: {
        
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    max-width: 600px;
}
h2{
    text-align: center;
    margin-bottom: 40px;
    margin-top: 30px;
    color: #42b983;
}
.is-success{
    margin-top: 30px;
    margin-bottom: 120px;
}
.is-danger{
    margin-top: 20px;
    margin-bottom: 120px;
}
.is-link{
    margin-top: 20px;
}
</style>
