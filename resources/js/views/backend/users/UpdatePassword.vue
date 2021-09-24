<template>
    <div class="container-fluid">
         <div class="row">
            <div class="col-lg-12">
               <template v-if="success">
                  <v-success>{{successMsg}}</v-success>
               </template>
               <template v-if="error">
                  <v-error variant="danger" icon="alert">{{error}}</v-error>
               </template>
               <div class="mm-edit-list-data">
                  <div class="card">
                     <div class="card-header d-flex justify-content-between">
                        <div class="mm-header-title">
                           <h4 class="card-title">Change Password</h4>
                        </div>
                     </div>
                     <div class="card-body">
                        <form @submit.prevent="resetPassword">
                           <div class="form-group">
                              <label for="cpass">Current Password:</label>
                              <input 
                                 type="Password" 
                                 class="form-control" 
                                 id="cpass" 
                                 v-model="user.old_password"
                                 :class="[{ 'is-invalid': errorFor('old_password') }]"
                              >
                              <v-errors :errors="errorFor('old_password')"></v-errors>
                           </div>
                           <div class="form-group">
                              <label for="npass">New Password:</label>
                              <input 
                                 type="Password" 
                                 class="form-control" 
                                 id="npass" 
                                 v-model="user.password"
                                 :class="[{ 'is-invalid': errorFor('password') }]"
                              >
                              <v-errors :errors="errorFor('password')"></v-errors>
                           </div>
                           <div class="form-group">
                              <label for="vpass">Verify Password:</label>
                              <input 
                                 type="Password" 
                                 class="form-control" 
                                 id="vpass" 
                                 v-model="user.password_confirmation"
                              >
                           </div>
                           <button 
                             type="submit" 
                             class="btn btn-primary mr-2"
                             :disabled="validating"  
                           >
                              {{buttonText}}
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>
<script>
import {is400, is401, is422} from '../../../config/response'
import validationErrors from '../../../mixins/validationErrors'

export default {
   name:'UpdatePassword',
   mixins: [validationErrors],
   data() {
      return {
         user: {
            old_password: '',
            password: '',
            password_confirmation: ''
         },
         success: false,
         successMsg: '',
         validating: false,
         status: null,
         error: null
      }
   },
   async mounted() {
      await this.$broadcast()
   },
   computed: {
      buttonText() {
         return this.validating === true ? 'Submitting...' : 'Submit'
      },
      hasErrors() {
         return 422 === this.status && this.errors !== null
      }
   },
   methods: {
      async resetPassword() {
         this.error = null
         this.errors = null
         this.status = null
         this.validating = true
         this.success = false
         this.successMsg = ''

         try {
            const response = await axios.post('/backend/password/update', {...this.user})
            this.successMsg = response.data.message
            this.success = true
         } catch (error) {
            console.log(error)
            if(is422(error)) {
               this.errors = error.response.data.errors
            }
            if(is400(error)) {
               this.error = error.response.data.error
            }
            if(is401(error)) {
               this.$logOut()
            }
            this.status = error.response.status
         }

         this.validating = false
      }
   }
}
</script>