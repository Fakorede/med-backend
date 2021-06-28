<template>
     <div class="container-fluid">
         <div class="row">
            <div class="col-xl-12 col-lg-12">
               <template v-if="success">
                  <v-success>{{successMsg}}</v-success>
               </template>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">New User Information</h4>
                     </div>
                     <router-link :to="{name: 'app.user-list'}" class="btn btn-primary" data-toggle="modal" data-target="#addContact">
                        Users List
                     </router-link>
                  </div>
                  <div class="card-body">
                     <div class="new-user-info">
                        <form @submit.prevent="addUser">
                           <div class="row">
                              <div class="form-group col-md-6">
                                 <label for="name">Name:</label>
                                 <input 
                                    type="text" 
                                    class="form-control" 
                                    id="name" 
                                    placeholder="Full Name" 
                                    v-model="user.name" 
                                    :class="[{ 'is-invalid': errorFor('name') }]"
                                 >
                                 <v-errors :errors="errorFor('name')"></v-errors>
                              </div>
                              <div class="form-group col-md-6">
                                 <label for="email">Email:</label>
                                 <input 
                                    type="email" 
                                    class="form-control" 
                                    id="email"
                                    placeholder="Email" 
                                    v-model="user.email"
                                    :class="[{ 'is-invalid': errorFor('email') }]"
                                 >
                                 <v-errors :errors="errorFor('email')"></v-errors>
                              </div>
                           </div> 
                           <button 
                              type="submit" 
                              class="btn btn-primary" 
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
import {is401, is422} from '../../../config/response'
import validationErrors from '../../../mixins/validationErrors'

export default {
   name:'UserAdd',
   mixins: [validationErrors],
   data() {
      return {
         user: {
            name: '',
            email: ''
         },
         success: false,
         successMsg: '',
         validating: false,
         status: null
      }
   },
   computed: {
      buttonText() {
         return this.validating === true ? 'Adding User...' : 'Add New User'
      },
      hasErrors() {
         return 422 === this.status && this.errors !== null
      }
   },
   methods: {
      async addUser() {
         this.errors = null
         this.status = null
         this.validating = true
         this.success = false
         this.successMsg = ''

         try {
            const response = await axios.post('/backend/dashboard/invite', {...this.user})
            this.successMsg = response.data.message
            this.success = true
         } catch (error) {
            console.log(error)
            if(is422(error)) {
               this.errors = error.response.data.errors
            }
            if(is401(error)) {
               this.$logOut()
            }
            this.status = error.response.status
         }

         this.user = {}
         this.validating = false
      }
   }
}
</script>