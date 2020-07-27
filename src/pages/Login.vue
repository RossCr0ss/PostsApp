<template>
    <div class="login">
        <h1>Please login</h1>
        <form class="form">
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
                />
                <span 
                    v-show="error" 
                    class="error"
                >
                    Incorrect email
                </span>
            </div>
            
            <div class="form__box">
                <router-link
                    class="btn"
                    to="/login"
                    @click.native="navToHome()"
                    replace
                >
                    Login
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: false,
            email: ''
        }
    },
    methods: {
        navToHome() {
           if (this.email == 'test@test.com') {
                this.$router.push('home')
                console.log('Success logging...');
           } else {
               this.error = true
           }
        }
    }
}
</script>

<style lang="scss">
    .login {
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