<template>
    <div class="container-fluid">
         <div class="row">
            <div class="col-lg-12">
               <div class="card card-block card-stretch card-height">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title mb-0">User List</h4>
                     </div>
                     <router-link :to="{name: 'app.user-add'}" class="btn btn-primary" data-toggle="modal" data-target="#addContact">Add New</router-link>
                  </div>
                  <div class="card-body">
                     <b-table-simple responsive>
                        <b-thead>
                           <b-th>#</b-th>
                           <b-th>Name</b-th>
                           <b-th>Email</b-th>
                           <b-th>Date Added</b-th>
                        </b-thead>
                        <b-tbody>
                           <b-tr v-for="(user, index) in users" :key="'user' + index">
                              <b-th>{{index+1}}</b-th>
                              <b-td>{{user.name}}</b-td>
                              <b-td>{{user.email}}</b-td>
                              <b-td>{{user.created_at | dateFilter}}</b-td>
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
import {is401} from '../../../config/response'
export default {
   name:'UserList',
   created() {
      this.getUsers()
   },
   data() {
      return {
         users: []
      }
   },
   methods: {
      async getUsers() {
         try {
            const response = await axios.get('/backend/dashboard/users')
            this.users = response.data.data.users
         } catch (error) {
            console.log(error)
            if(is401(error)) {
               this.$logOut()
            }
         }
      }
   },
}
</script>
