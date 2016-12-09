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
            <td v-for="col in gridColumns">{{  item[col] }}</td>
          </tr>
          </tbody>
        </table>
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
                  gridColumns: ['customerId', 'companyName', 'contactName', 'phone'],
                  gridData: [],
                  apiUrl: 'http://211.149.193.19:8080/api/customers'
                },
                ready: function() {
                  this.getCustomers()
                },
                methods: {
                  getCustomers: function() {
                    this.$http.jsonp(this.apiUrl).then((response) => {
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
                  }
                }
            })
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>
<script>
  // import $ from 'jquery'
  export default {
    data () {
      return {
        gridColumns: ['customerId', 'companyName', 'contactName', 'phone'],
        gridData: [],
        apiUrl: 'http://211.149.193.19:8080/api/customers',
        showNoData: false
      }
    },
    mounted () {
      this.$nextTick(function () { // 保证 this.$el 已经插入文档
        this.getServerData()
      })
    },
    methods: {
      getServerData () {
        this.$http.jsonp(this.apiUrl).then((response) => {
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
      }
    }
  }
</script>
