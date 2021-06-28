export default {
  methods: {
    $logOut() {
      this.$toasted.error('Session Expired! You\'re being logged out now. Kindly re-login')

      setTimeout(() => {
        this.$store.dispatch('auth/logOut')
        this.$router.push({name: 'auth.login'})
        this.$toasted.success('Successfully logged out!')
      }, 4500)

    }
  }
}