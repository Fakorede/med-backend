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
                <h2 class="mb-2 text-center">Reset Password</h2>
                <form @submit.prevent="reset">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" type="email" placeholder="admin@example.com" v-model="user.email" readonly>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label>Password</label>
                        <input class="form-control" type="password" placeholder="********" v-model="user.password" required>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label>Confirm Password</label>
                        <input class="form-control" type="password" placeholder="********" v-model="user.password_confirmation" required>
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
import {is422} from '../../config/response'
export default {
   name:'ResetPassword',
   data() {
      return {
        'user': {
          'email': '',
          'password': '',
          'password_confirmation': '',
          'token': '',
        },
        'errors': null,
        'validating': false
      }
   },
  mounted() {
    this.user.email = this.$route.query.email
    this.user.token = this.$route.params.token
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
      return this.validating === true ? 'Resetting Password...' : 'Reset Password'
    }
  },
  methods: {
    async reset() {
      this.errors = null
      this.validating = true

      try {
        const {data} = await axios.post('/backend/password/reset', {
          ...this.user
        })

        this.$toasted.success(data.status)
        await this.$router.push({name: 'auth.login'})
      } catch(error) {
        if(is422(error)) {
          this.errors = error.response.data.errors
        }

        this.$toasted.error(error.response.data.status)
      }

      this.validating = false
    }
  }
}
</script>