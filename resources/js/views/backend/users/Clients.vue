<template>
    <div class="container-fluid">
         <div class="row">
            <div class="col-lg-12">
               <div class="card card-block card-stretch card-height">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title mb-0">Client List</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <b-table-simple responsive>
                        <b-thead>
                           <b-th>#</b-th>
                           <b-th>Name</b-th>
                           <b-th>Email</b-th>
                           <b-th>Phone Number</b-th>
                           <b-th>Date Joined</b-th>
                        </b-thead>
                        <b-tr class="text-center" v-if="loading">
                           <b-td></b-td>
                           <b-td></b-td>
                           <b-td>
                              <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
                           </b-td>
                           <b-td></b-td>
                           <b-td></b-td>
                        </b-tr>
                        <b-tbody v-else-if="users.length > 0">
                           <b-tr v-for="(user, index) in users" :key="'user' + index">
                              <b-th>{{index+1}}</b-th>
                              <b-td>{{user.first_name}} {{user.last_name}}</b-td>
                              <b-td>{{user.email}}</b-td>
                              <b-td>{{user.phone_number}}</b-td>
                              <b-td>{{user.created_at | dateFilter}}</b-td>
                           </b-tr>
                        </b-tbody>
                        <b-tbody v-else>
                           <b-tr class="text-center">
                              <b-td colspan="6">No result match your search.</b-td>
                           </b-tr>
                        </b-tbody>
                     </b-table-simple>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>
<script>
import {is401, is403} from '../../../config/response'
export default {
   name:'ClientList',
   created() {
      this.getUsers()
   },
   async mounted() {
      await this.$broadcast()
   },
   data() {
      return {
         users: [],
         loading: false,
      }
   },
   methods: {
      async getUsers() {
         this.loading = true
         try {
            const response = await axios.get('/api/admin/users', {
               headers: { 'Authorization': `Bearer ${localStorage.getItem('sserpxe_cigam')}` }
            })
            this.users = response.data.data
         } catch (error) {
            console.log(error)
            if(is401(error)) {
               this.$logOut()
            }
            if(is403(error)) {
               this.$toasted.error("Kindly verify your account before performing any actions!")
            }
         }

         this.loading = false
      }
   },
}
</script>
