<template>
    <div class="container-fluid">
         <div class="row">
            <div class="col-lg-12">
               <div class="card card-block card-stretch card-height">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title mb-0">Unread Notifications</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <b-table-simple responsive>
                        <b-thead>
                           <b-th>#</b-th>
                           <b-th>Type</b-th>
                           <b-th>Message</b-th>
                           <b-th>Created Date</b-th>
                           <b-th>Actions</b-th>
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
                        <b-tbody v-else-if="notifications.length > 0">
                           <b-tr 
                            v-for="(notification, index) in notifications" :key="'notification' + index"
                          >
                              <b-th>{{index+1}}</b-th>
                              <b-td>{{notification.type | formatType}}</b-td>
                              <b-td>{{notification.data.message}}</b-td>
                              <b-td>{{notification.created_at | dateFilter}}</b-td>
                              <b-td>
                                 <button class="btn btn-primary btn-sm" @click="markAsRead(notification.id)">
                                    Mark as Read
                                 </button>
                              </b-td>
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
import { mapGetters, mapActions } from 'vuex'
import {is401, is403} from '../../../config/response'
export default {
  name:'UnreadNotifications',
  created() {
    this.getUnread()
  },
   async mounted() {
      await this.$broadcast()
   },
  data() {
    return {
      loading: false,
    }
  },
   computed: {
     ...mapGetters({
         notifications: 'notifications/unread'
     })
   },
  methods: {
      ...mapActions({
         getNotifications: 'notifications/getNotifications',
         markNotification: 'notifications/markAsRead'
      }),
    async getUnread() {
      this.loading = true
      try {
        this.getNotifications('unread')
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
    async markAsRead(notification_id) {
      try {
         const responseMsg = await this.markNotification(notification_id)
         await this.$toasted.success(responseMsg)
      } catch (error) {
         console.log(error)
         this.$toasted.error('Something went wrong')
      }
    }
  },
}
</script>
