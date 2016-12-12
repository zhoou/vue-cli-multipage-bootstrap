<template>
  <div class="row">
    <div class="col-xs-6">
      <div class="demo highdemo" v-cloak>
        <table class="table table-bordered">
          <thead>
          <tr>
            <th v-for="colname in gridColumns">{{ colname.name }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-if="showNoData">
            <td :colspan="this.gridColumns.length" style="text-align:center;background-color:#eee">
              <small>No data</small>
            </td>
          </tr>
          <tr v-for="(item, index) in gridData">
            <td v-for="col in gridColumns">
              <span v-if="col.isKey">
                <a href="javascript:void(0)" @click="loadEntry(item[col.name])">{{ item[col.name] }}</a>
              </span>
              <span v-else>{{ item[col.name] }}</span>
            </td>
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
              data () {
                return {
                  gridColumns: [
                    {name: 'customerId', isKey: true},
                    {name: 'companyName'},
                    {name: 'contactName'},
                    {name: 'phone'}
                  ],
                  gridData: [],
                  apiUrl: 'http://211.149.193.19:8080/api/customers',
                  showNoData: false,
                  showDialog: false,
                  item: {}
                }
              },
              mounted () {
                this.$nextTick(function () { // 保证 this.$el 已经插入文档
                  this.getServerData()
                })
              },
              methods: {
                getServerData () {
                  var self = this
                  self.$http.get(this.apiUrl).then((response) => {
                    let result = response.data
                    if (result && result.length > 0) {
                      // this.$set('gridData', result)
                      self.gridData = result
                    } else {
                      self.showNoData = true
                    }
                  }, (response) => {
                    // error back coding...
                  }).catch(function (response) {
                    console.log(response)
                  })
                },
                loadEntry (name) {
                  var self = this
                  self.gridData.forEach(function (item) {
                    if (name === item.customerId) {
                      self.item = item
                      self.showDialog = true
                      return
                    }
                  })
                },
                openDialog () {
                  let self = this
                  self.item = {}
                  self.showDialog = true
                },
                createCustomer () {
                  let self = this
                  console.log(self.item)
                  self.$http.post(self.apiUrl, self.item).then((response) => {
                    self.item = {}
                    self.getServerData()
                  })
                },
                updateCustomer () {
                  var self = this
                  self.$http.put(this.apiUrl + '/' + self.item.customerId, self.item)
                    .then((response) => {
                      self.getServerData()
                    })
                },
                receiveChildState (state) {
                  let self = this
                  if (state != null) {
                    self.showDialog = state.show
                    if (state.theResult) {
                      self.item.customerId ? self.updateCustomer() : self.createCustomer()
                    }
                  }
                }
              }
            })
          </code>
        </pre>
      </div>
    </div>
    <v-modal :show="showDialog" effect="zoom" width="400" @backUpState="receiveChildState">
      <div slot="modal-body" class="form-horizontal modal-body" role="form">
        <div class="form-group" v-show="item.customerId">
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
        gridColumns: [
          {name: 'customerId', isKey: true},
          {name: 'companyName'},
          {name: 'contactName'},
          {name: 'phone'}
        ],
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
        var self = this
        self.$http.get(this.apiUrl).then((response) => {
          let result = response.data
          if (result && result.length > 0) {
            // this.$set('gridData', result)
            self.gridData = result
          } else {
            self.showNoData = true
          }
        }, (response) => {
          // error back coding...
        }).catch(function (response) {
          console.log(response)
        })
      },
      loadEntry (name) {
        var self = this
        self.gridData.forEach(function (item) {
          if (name === item.customerId) {
            self.item = item
            self.showDialog = true
            return
          }
        })
      },
      openDialog () {
        let self = this
        self.item = {}
        self.showDialog = true
      },
      createCustomer () {
        let self = this
        console.log(self.item)
        self.$http.post(self.apiUrl, self.item).then((response) => {
          self.item = {}
          self.getServerData()
        })
      },
      updateCustomer () {
        var self = this
        self.$http.put(this.apiUrl + '/' + self.item.customerId, self.item)
          .then((response) => {
            self.getServerData()
          })
      },
      receiveChildState (state) {
        let self = this
        if (state != null) {
          self.showDialog = state.show
          if (state.theResult) {
            self.item.customerId ? self.updateCustomer() : self.createCustomer()
          }
        }
      }
    }
  }
</script>
