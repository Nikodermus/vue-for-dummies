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
export default {
    name: 'LoginPage',
    data: function() {
        return {
            name: '',
            email: '',
            apiKey: ''
        }
    },

    methods: {
        doLogin: function() {
            console.log(this.name, this.email, this.apiKey);

            localStorage.setItem('name', this.name),
            localStorage.setItem('email', this.email),
            localStorage.setItem('apiKey', this.apiKey)

            alert('Saved OK');
        }
    }
}
</script>
