<template>
  <!-- Modal -->
  <div>
    <div class="modal-body">
      <form @submit.prevent="addUser">
        <div class="row">
          <div class="form-group col-md-6">
            <label for="first_name">First Name:</label>
            <input 
              type="text" 
              class="form-control" 
              id="first_name" 
              placeholder="First Name" 
              v-model="user.first_name" 
              :class="[{ 'is-invalid': errorFor('first_name') }]"
            >
            <v-errors :errors="errorFor('first_name')"></v-errors>
          </div>
          <div class="form-group col-md-6">
            <label for="last_name">Last Name:</label>
            <input 
              type="text" 
              class="form-control" 
              id="last_name" 
              placeholder="Last Name" 
              v-model="user.last_name" 
              :class="[{ 'is-invalid': errorFor('last_name') }]"
            >
            <v-errors :errors="errorFor('last_name')"></v-errors>
          </div>
        </div> 
        <div class="row">
          <div class="form-group col-md-6">
            <label for="phone_number">Phone Number:</label>
            <input 
              type="text" 
              class="form-control" 
              id="phone_number" 
              placeholder="Phone Number" 
              v-model="user.phone_number" 
              :class="[{ 'is-invalid': errorFor('phone_number') }]"
            >
            <v-errors :errors="errorFor('phone_number')"></v-errors>
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
          class="btn btn-primary float-right mb-3" 
          :disabled="validating"
        >
          {{buttonText}}
        </button>
      </form>            
    </div>
  </div>
  <!-- ./ Modal -->
</template>

<script>
  import {is401, is422} from '../../../config/response'
  import validationErrors from '../../../mixins/validationErrors'

  export default {
    name: 'AddUserModal',
    mixins: [validationErrors],
    props: {
      usertype: {
        type: Number,
        required: true,
      }
    },
    data() {
      return {
        user: {
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
        },
        validating: false,
        status: null
      }
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
      async addUser() {
        this.errors = null
        this.status = null
        this.validating = true

        try {
          const response = await axios.post('/api/settings/invite', {
            ...this.user, 
            role_id: this.usertype
          }, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('sserpxe_cigam')}` }
          })
          // $('#addUserModal').modal('hide')
          // this.user = {}
          this.$router.go()
          this.$toasted.success(response.data.message)
        } catch (error) {
          console.log(error)

          if(is422(error)) {
            this.errors = error.response.data.errors
          }

          if(is401(error)) {
            $('#addUserModal').modal('hide')
            this.$logOut()
          }

          this.status = error.response.status
        }

        this.validating = false
      },
      showModal() {
        $('#addUserModal').modal('show')
      }
    }
  }
</script>

<style scoped>

</style>