export default {
  methods: {
    async $broadcast() {
      //const userId = await this.user?.id
      const userId = await this.$store.state.auth.user?.id
      
      if (userId) {
        await Echo.private(`App.Models.User.${userId}`)
          .notification((notification) => {
            // console.log(notification.message);
            this.$toasted.info(notification.message)
          });

        // console.log('auth user => ' + JSON.stringify(userId))
      } else {
        // console.log('user id n/a')
      }
    }
  }
}