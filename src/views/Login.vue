<template>
    <div class="login">
        <h1 class="title">Please login</h1>
        <form 
            class="form"
            @submit.prevent="login"
        >
            <div class="form__box">
                <label 
                    for="email"
                    class="label"
                >
                    Your email
                </label>
                <input
                    type="email"
                    id="email"
                    class="input"
                    v-model="email"
                    required
                />
                <span 
                    v-show="error" 
                    class="error"
                >
                    Incorrect email
                </span>
            </div>
                
            <div class="form__box">
                <button 
                    class="btn" 
                    type="submit"
                >
                    Login
                </button>
            </div>
        </form>
    </div>
    
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "Login",
    data() {
        return {
            error: "",
            email: "",
            user: null,
            users: null,
            isLogging: false,
        };
    },

    async mounted() {
        await this.GET_USERS()
        await this.CHANGE_LOGED(this.isLogging)
    },
    computed: mapGetters(["ALL_USERS", "IS_USER_LOGGING"]),

    methods: {
        ...mapActions(["GET_USERS", "CHANGE_LOGED", "SET_USER_INFO"]),
        login() {
            let array = (this.users = this.ALL_USERS)
            let user = (this.user = this.email)
            for (let i = 0; i < array.length; i++) {
                if (user === array[i].email) {
                    this.isLogging = true
                    this.CHANGE_LOGED(this.isLogging)
                    this.SET_USER_INFO(i)
                    this.$router.push({ name: "home" })
                } else {
                    this.error = true
                }
            }
        },
    },
};
</script>

<style lang="scss">

.login {
    margin-top: 120px;

    h1 {
        margin: 20px 0;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__box {
            width: 50%;
            max-width: 800px;
            padding: 0 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .label {
                color: #2c3e50;
            }
            
            .input {
                width: 100%;
                padding: 5px 10px;
                font-size: 20px;
                margin: 10px 0;
                border: 1px solid #2c3e50;
                border-radius: 4px;
            }
                
            .btn {
                width: 140px;
                background: white;
                color: #2c3e50;
                font-size: 20px;
                padding: 5px 10px;
                border: 1px solid #2c3e50;
                border-radius: 4px;
                text-decoration: none;
            }
                
            .btn:hover {
                background: #42b983;
                color: white;
                cursor: pointer;
            }
        }
    }
}

.error {
    color: red;
    padding: 5px;
}

</style>
