<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
          <div class="card card-block card-stretch card-height">
            <div class="card-header d-flex justify-content-between">
              <div class="header-title">
                <h4 class="card-title mb-0">Admin List</h4>
              </div>
              <!-- Button to trigger modal -->
              <button type="button" class="btn btn-primary btn-sm" @click="showModal">
                Add New Admin
              </button>
              <!-- Modal -->
              <div class="modal fade" id="addUserModal" tabindex="-1" role="dialog" aria-labelledby="orderModal" aria-hidden="true">
                <div class="modal-dialog modal-md" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title"><strong>Add Admin</strong></h5>
                      <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <add-user-modal :usertype=1 />
                  </div>
                </div>
              </div>
              <!-- ./ Modal -->
            </div>
            <div class="card-body">
              <b-table-simple responsive>
                <b-thead>
                  <b-th>#</b-th>
                  <b-th>Name</b-th>
                  <b-th>Email</b-th>
                  <b-th>Phone Number</b-th>
                  <b-th>Date Added</b-th>
                  <!-- <b-th>Invite Status</b-th> -->
                </b-thead>
                <b-tr class="text-center" v-if="loading">
                  <b-td></b-td>
                  <b-td></b-td>
                  <b-td></b-td>
                  <b-td><b-spinner variant="primary" type="grow" label="Spinning"></b-spinner></b-td>
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
                    <!-- <b-td>
                      <template v-if="user.is_verified">
                        <span class="badge badge-success">Accepted</span>
                      </template>
                      <template v-else>
                        <span class="badge badge-info">Pending</span>
                      </template>
                    </b-td> -->
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
import AddUserModal from './AddUser.vue'
export default {
  name:'AdminList',
  components: {AddUserModal},
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
        const response = await axios.get('/api/admin/admins', {
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
    },
    showModal() {
      $('#addUserModal').modal('show')
    }
  },
}
</script>
