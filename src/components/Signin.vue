<template>
    <div class="container">
        <h2 class="title is-1">Login</h2>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" v-model='email'>
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" v-model='password'>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button @click='register' class="is-link button">Sign up</button>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '../firebase/firebase';
export default {
    name: 'Signin',
    data: function(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        register: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((data) =>{
                console.log(data)
            }).catch((error) =>{
                console.log(error)
            })
        }
    },

}
</script>

<style scoped>
.container{
  max-width: 600px;
  margin: 100px auto;
}
</style>
