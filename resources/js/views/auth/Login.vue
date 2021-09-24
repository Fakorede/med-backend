<template>
     <section class="login-content">
         <div class="container h-100">
            <div class="row align-items-center justify-content-center h-100">
               <div class="col-md-5">
                  <template v-if="errors">
                     <v-error variant="danger" icon="alert">{{errors}}</v-error>
                  </template>
                  <div class="card">
                     <div class="card-body">
                        <!-- <div class="auth-logo">
                           <img src="../../assets/images/logo.png" class="img-fluid rounded-normal" alt="logo">
                        </div> -->
                        <h2 class="mb-2 text-center">Sign In</h2>
                        <form @submit.prevent="login">
                           <div class="row">
                              <div class="col-lg-12">
                                 <div class="form-group">
                                    <label>Email</label>
                                    <input class="form-control" type="email" placeholder="admin@example.com" v-model="email" required>
                                 </div>
                              </div>
                              <div class="col-lg-12">
                                 <div class="form-group">
                                    <label>Password</label>
                                    <input class="form-control" type="password" placeholder="********" v-model="password" required>
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <div class="mb-3 custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                                    <label class="custom-control-label" for="customCheck1">Remember Me</label>
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <router-link :to="{name: 'auth.recover-password'}" class="float-right text-primary">Forgot Password?</router-link>
                              </div>
                           </div>
                           <div class="d-flex justify-content-between align-items-center">
                              <button type="submit" class="btn btn-primary" :disabled="validating">
                                 {{buttonText}}
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
</template>
<script>
import { mapGetters } from 'vuex'
import {is400} from '../../config/response'

export default {
   name:'SignIn',
   data() {
      return {
         'email': '',
         'password': '',
         'errors': '',
         'validating': false
      }
   },
   created() {
      if(this.authenticated) {
         this.$router.push({name: 'app.dashboard'})
      }
   },
   computed: {
      ...mapGetters('auth', {
        authenticated: 'authenticated'
      }),
      buttonText() {
         return this.validating === true ? 'Signing In...' : 'Sign In'
      }
   },
   methods: {
      async login() {
         this.errors = ''
         this.validating = true

         try {
            const {data} = await axios.post('/api/auth/login', {
               email: this.email,
               password: this.password
            })

            await localStorage.setItem('sserpxe_cigam', data.data.access_token)
            await this.$store.dispatch('auth/logIn', data.data.user)
            await this.$router.push({name: 'app.dashboard'})
            await this.$toasted.success('Successfully logged in!')

         } catch(error) {
            if(is400(error)) {
               this.errors = error.response.data.error
               this.$toasted.error(error.response.data.error)
            }

            this.$toasted.error(error.response.data.error)
            // this.$toasted.error("Error: login request failed")
         }

         this.validating = false
      }
   }
}
</script>
