<template>
  <div class="row">
    <div class="col-xs-6">
      <div class="demo highdemo" v-cloak>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th v-for="colname in gridColumns">{{ colname }}</th>
            </tr>
          </thead>
          <tbody>
          <tr v-if="showNoData">
            <td :colspan="this.gridColumns.length" style="text-align:center;background-color:#eee">
              <small>No data</small>
            </td>
          </tr>
          <tr v-for="(item, index) in gridData">
            <td v-for="col in gridColumns">{{ item[col] }}</td>
          </tr>
          </tbody>
        </table>
        <button class="btn btn-info" @click='openDialog'>create</button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="zero-clipboard"><span class="btn-clipboard">js</span></div>
      <div class="highlight">
        <pre>
          <code class="javascript">
             var demo = new Vue({
                el: '#app',
                data: {
                  show: false,
                  gridColumns: [
                    {name: 'customerId', isKey: true},
                    {name: 'companyName'},
                    {name: 'contactName'},
                    {name: 'phone'}
                  ],
                  gridData: [],
                  apiUrl: 'http://211.149.193.19:8080/api/customers',
                  item: {}
                },
                ready: function() {
                  this.getCustomers()
                },
                methods: {
                  closeDialog: function() {
                    this.show = false
                  },
                  getCustomers: function() {
                    var vm = this
                    vm.$http.get(vm.apiUrl)
                      .then((response) => {
                        vm.$set('gridData', response.data)
                    })
                  },
                  createCustomer: function() {
                    var vm = this
                    vm.$http.post(vm.apiUrl, vm.item)
                      .then((response) => {
                          vm.$set('item', {})
                          vm.getCustomers()
                      })
                    this.show = false
                  }
                }
            })
          </code>
        </pre>
      </div>
    </div>
    <v-modal :show="showDialog" effect="zoom" width="400" @backUpState="receiveChildState">
      <div slot="modal-body" class="form-horizontal modal-body" role="form">
        <div class="form-group" style="display: none;">
          <label class="col-sm-4 control-label">Customer Id</label>
          <div class="col-sm-6">
            <input v-model="item.customerId" type="text" disabled="disabled" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-4 control-label">Company Name</label>
          <div class="col-sm-6">
            <input v-model="item.companyName" type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-4 control-label">Contact Name</label>
          <div class="col-sm-6">
            <input v-model="item.contactName" type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-4 control-label">Phone</label>
          <div class="col-sm-6">
            <input v-model="item.phone" type="text" class="form-control">
          </div>
        </div>
      </div>
    </v-modal>
  </div>
</template>
<script>
  import vModal from 'components/Common/vModal'
  export default {
    data () {
      return {
        gridColumns: ['customerId', 'companyName', 'contactName', 'phone'],
        gridData: [],
        apiUrl: 'http://211.149.193.19:8080/api/customers',
        showNoData: false,
        showDialog: false,
        item: {}
      }
    },
    components: {
      vModal
    },
    mounted () {
      this.$nextTick(function () { // 保证 this.$el 已经插入文档
        this.getServerData()
      })
    },
    methods: {
      getServerData () {
        this.$http.get(this.apiUrl).then((response) => {
          let result = response.data
          if (result && result.length > 0) {
            // this.$set('gridData', result)
            this.gridData = result
          } else {
            this.showNoData = true
          }
        }, (response) => {
          // error back coding...
        }).catch(function (response) {
          console.log(response)
        })
      },
      openDialog () {
        let self = this
        self.showDialog = true
      },
      createData () {
        let self = this
        self.$http.post(self.apiUrl, self.item).then((response) => {
            // _self.$set('item', {})
          self.item = {}
          self.getServerData()
        })
      },
      receiveChildState (state) {
        let self = this
        if (state != null) {
          self.showDialog = state.show
          if (state.theResult) {
            self.createData()
          }
        }
      }
    }
  }
</script>
