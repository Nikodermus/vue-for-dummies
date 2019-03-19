<template>
    <div>
        <form @submit.prevent="doLogin">
            <p>
                <label for="name-input">
                    <span>User Name:  </span>
                    <input v-model="name" type="text" id="name-input" name="name-input">
                </label>
            </p>
            <p>
                <label for="email-input">
                    <span>Email:  </span>
                    <input v-model="email" type="text" id="email-input" name="email-input">
                </label>
            </p>
            <p>
                <label for="apikey-input">
                    <span>API key:  </span>
                    <input v-model="apiKey" type="text" id="apikey-input" name="apikey-input">
                </label>
            </p>
            <button type="submit">
                Login
            </button>
        </form>
    </div>
</template>

<script>
import { saveValue, getValue } from '@/services/storage';

export default {
    name: 'LoginPage',
    data: function() {
        return {
            name: '',
            email: '',
            apiKey: ''
        }
    },

    created: function() {
        Promise.all([
            getValue('name'),
            getValue('email'),
            getValue('apiKey')
        ]).then(
            function(initialValues) {
                this.name = initialValues[0];
                this.email = initialValues[1];
                this.apiKey = initialValues[2];
            }.bind(this)
        )
    },

    methods: {
        doLogin: function() {
            console.log(this.name, this.email, this.apiKey);
            Promise.all([
                saveValue('name', this.name),
                saveValue('email', this.email),
                saveValue('apiKey', this.apiKey)
            ]).then(
                function() {
                    alert('Saved OK');
                    this.$router.push({ name: 'search' });
                }.bind(this)
            )
        }
    }
}
</script>
