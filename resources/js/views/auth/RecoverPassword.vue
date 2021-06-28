<template>
     <section class="login-content">
         <div class="container h-100">
            <div class="row align-items-center justify-content-center h-100">
               <div class="col-md-5">
                  <div class="card">
                     <div class="card-body">
                        <h2 class="mb-2 text-center">Recover Password</h2>
                        <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
                        <form @submit.prevent="recover">
                           <div class="row">
                              <div class="col-lg-12">
                                 <div class="form-group">
                                    <label>Email</label>
                                    <input class="form-control" type="email" placeholder="Your email address" v-model="email" required>
                                 </div>
                              </div>
                           </div>
                           <button type="submit" :disabled="validating" class="btn btn-primary btn-block">{{buttonText}}</button>
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

export default {
   name:'RecoverPassword',
   data() {
      return {
         email: '',
         validating: false,
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
         return this.validating === true ? 'Sending Reset Link...' : 'Recover Password'
      }
   },
   methods: {
      async recover () {
         this.validating = true

         try {
            const {data} = await axios.post('/backend/password/forgot', {email: this.email})

            this.$toasted.success(data.status)
            this.$router.push({name: 'auth.confirm-mail'})
         } catch (error) {
            this.$toasted.error(error.response.data.status)
         }
         
         this.validating = false
      }
   }
}
</script>