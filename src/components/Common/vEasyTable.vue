<template id="easyTable">
  <div class="easytable">
    <div class="easytable-wrap">
      <div class="easytable-views" :style="{'height': newHeight+'px'}">
        <!--左列-->
        <template v-if="frozenCols.length > 0">
          <div class="easytable-leftview" :style="{'width':leftViewWidth+'px'}">
            <!--左列头-->
            <div class="easytable-header"
                 :style="{'width': leftViewWidth+'px', 'height':titleRowHeight+'px','background-color':titleBgColor}">
              <div class="easytable-header-inner" style="display: block;">
                <table class="easytable-htable" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                  <tr class="easytable-header-row">
                    <td v-for="col in frozenCols"
                        :class="[enableSort(col.orderBy) ? 'cursorPointer':'']"
                        @click.stop="sortControl(col.field,col.orderBy)">
                      <div class="easytable-cell"
                           :style="{'width':col.width+'px','height':titleRowHeight+'px','line-height':titleRowHeight+'px','text-align':col.align}">
                        <span class="table-title">{{col.title}} </span>
                        <span v-if="enableSort(col.orderBy)"
                              :class="['easytable-sort-icon', col.orderBy]"></span>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!--左列内容-->
            <div class="easytable-body"
                 :style="{'width': leftViewWidth+'px', 'margin-top': '0px', 'height': (newHeight-titleRowHeight)+'px'}">
              <div class="easytable-body-inner">
                <table class="easytable-btable" cellspacing="0" cellpadding="0" border="0">
                  <tbody>
                  <tr v-for="(item,index) in tableData" class="easytable-row">
                    <td v-for="col in frozenCols">
                      <div class="easytable-cell"
                           :style="{'width':col.width+'px','height': rowHeight+'px','line-height':rowHeight+'px','text-align':col.align}">
                        <template v-if="typeof col.componentName ==='string'">
                          <component :rowData="item" :is="col.componentName"></component>
                        </template>
                        <template v-else>
                                                   <span v-if="typeof col.format==='function'"
                                                         v-html="col.format(item)">
                                                    </span>
                          <span v-else>
                                                        {{item[col.field]}}
                                                    </span>
                        </template>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
        <!--右列-->
        <div class="easytable-rightview">
          <!--右列头-->
          <div class="easytable-header"
               :style="{'width': (rightViewWidth-20)+'px','background-color':titleBgColor}">
            <div class="easytable-header-inner" style="display: block;">
              <table class="easytable-htable" border="0" cellspacing="0" cellpadding="0">
                <tbody>

                <template v-if="newTitleRows.length > 0">
                  <tr v-for="row in newTitleRows">
                    <td v-for="col in row" :class="[enableSort(col.orderBy) ? 'cursorPointer':'']"
                        :colspan="col.colspan" :rowspan="col.rowspan"
                        @click.stop="sortControl(col.fields[0],col.orderBy)">
                      <div class="easytable-cell"
                           :style="{'width':titleColumnWidth(col.fields)+'px','height':titleColumnHeight(col.rowspan)+'px','line-height':titleColumnHeight(col.rowspan)+'px','text-align':col.align}">
                        <span class="table-title">{{col.title}} </span>
                        <span v-if="enableSort(col.orderBy)"
                              :class="['easytable-sort-icon', col.orderBy]"></span>
                      </div>
                    </td>
                  </tr>
                </template>

                <template v-else>
                  <tr class="easytable-header-row">
                    <td v-for="col in noFrozenCols"
                        :class="[enableSort(col.orderBy) ? 'cursorPointer':'']"
                        @click.stop="sortControl(col.field,col.orderBy)">
                      <div class="easytable-cell"
                           :style="{'width':col.width+'px','height':titleRowHeight+'px','line-height':titleRowHeight+'px','text-align':col.align}">
                        <span class="table-title">{{col.title}} </span>
                        <span v-if="enableSort(col.orderBy)"
                              :class="['easytable-sort-icon', col.orderBy]"></span>
                      </div>
                    </td>
                  </tr>
                </template>
                </tbody>
              </table>
            </div>
          </div>
          <!--右列内容-->
          <div class="easytable-body"
               :style="{'width': rightViewWidth+'px', 'margin-top': '0px', 'height': rightViewHeight+'px'}">
            <table class="easytable-btable" cellspacing="0" cellpadding="0" border="0">
              <tbody>
              <tr v-for="(item,index) in tableData" class="easytable-row">
                <td v-for="col in noFrozenCols">
                  <div class="easytable-cell"
                       :style="{'width':col.width+'px','height': rowHeight+'px','line-height':rowHeight+'px','text-align':col.align}">
                    <template v-if="typeof col.componentName ==='string'">
                      <component :rowData="item" :is="col.componentName"></component>
                    </template>
                    <template v-else>
                                           <span v-if="typeof col.format==='function'"
                                                 v-html="col.format(item)">
                                            </span>
                      <span v-else>
                                                {{item[col.field]}}
                                            </span>
                    </template>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery'
    export default {
      name: 'easyTable',
      props: {
        width: {
          type: Number,
          require: true
        },
        minWidth: {
          type: Number,
          require: false
        },
        height: {
          type: Number,
          require: true
        },
        minHeight: {
          type: Number,
          require: false
        },
        titleRowHeight: {
          type: Number,
          require: false,
          default: 35
        },
        titleBgColor: {
          type: String,
          require: false,
          default: '#fff'
        },
        // 内容行高
        rowHeight: {
          type: Number,
          require: false,
          default: 30
        },
        // 多列排序
        multipleSort: {
          type: Boolean,
          require: false,
          default: true
        },
        columns: {
          type: Array,
          require: true
        },
        // 特殊表头
        titleRows: {
          type: Array,
          require: true
        },
        tableData: {
          type: Array,
          require: true
        }
      },
      data () {
        return {
          // 本地宽度
          newWidth: this.width,
          // 本地高度
          newHeight: this.height,
          // 本地列数据
          newColumns: Object.assign([], this.columns),
          // 本地复杂表头数据
          newTitleRows: Object.assign([], this.titleRows)
        }
      },
      computed: {
        // 冻结的列集合
        frozenCols () {
          return this.newColumns.filter(x => x.isFrozen === true)
        },
        // 非冻结列集合
        noFrozenCols () {
          return this.newColumns.filter(x => x.isFrozen !== true)
        },
        // 左侧区域宽度
        leftViewWidth () {
          let result = 0
          if (this.frozenCols && this.frozenCols.length > 0) {
            result = this.frozenCols.reduce((total, curr) => total + curr.width, 0)
          }
          return result
        },
        // 右侧区域宽度
        rightViewWidth () {
          // return this.newWidth - this.leftViewWidth - 2
          return this.newWidth
        },
        // 右侧区域高度
        rightViewHeight () {
          if (this.newTitleRows.length > 0) {
            return this.newHeight - this.titleRowHeight * this.newTitleRows.length
          } else {
            return this.newHeight - this.titleRowHeight
          }
        },
        // 将复杂表头配置数据简单化
        titleRowsToSortInfo () {
          let result = []
          let vm = this
          if (vm.newTitleRows.length > 0) {
            vm.newTitleRows.filter(function (row) {
              row.filter(function (column, index) {
                if (typeof column.orderBy === 'string' && column.fields.length === 1) {
                  column.field = column.fields[0]
                  result.push(column)
                }
              })
            })
          }
          return result
        }
      },
      methods: {
        // 是否允许排序
        enableSort (val) {
          return typeof val === 'string'
        },
        // 允许排序的列集合
        sortColumns () {
          let vm = this
          let sortColumns = {}
          let collection = vm.titleRowsToSortInfo.length > 0 ? vm.titleRowsToSortInfo : vm.newColumns
          collection.filter(function (item, index) {
            if (vm.enableSort(item.orderBy)) {
              sortColumns[item.field] = item.orderBy
            }
          })
          return sortColumns
        },
        sortControl (field, orderBy) {
          let vm = this
          let collection = vm.titleRowsToSortInfo.length > 0 ? vm.titleRowsToSortInfo : vm.newColumns
          if (vm.enableSort(orderBy)) {
            collection.filter(function (column, index) {
              if (vm.enableSort(column.orderBy) && column.field === field) {
                column.orderBy = column.orderBy === 'asc' ? 'desc' : (column.orderBy === 'desc' ? '' : 'asc')
              }
              if (!vm.multipleSort) {
                if (column.field !== field && vm.enableSort(column.orderBy)) {
                  column.orderBy = ''
                }
              }
            })
            vm.$emit('actionCallBack', vm.sortColumns())
          }
        },
        // 只允许保留第一个排序规则（‘asc’或者‘desc’）
        singelSortInit () {
          let vm = this
          let result = false
          if (!vm.multipleSort) {
            let collection = vm.titleRowsToSortInfo.length > 0 ? vm.titleRowsToSortInfo : vm.newColumns
            collection.filter(function (item, index) {
              if (vm.enableSort(item.orderBy) && item.orderBy !== '') {
                if (result) {
                  item.orderBy = ''
                }
                result = true
              }
            })
          }
        },
        // 获取每个表头列的宽度
        titleColumnWidth (fields) {
          let result = 0
          if (Array.isArray(fields)) {
            let matchItems = this.newColumns.filter((item, index) => {
              return fields.some(x => x === item.field)
            })
            result = matchItems.reduce((total, curr) => total + curr.width, 0)
          } else {
            console.error('the fields attribute must be a array in titleRows')
          }
          return result
        },
        // 获取每个表头列的高度
        titleColumnHeight (rowspan) {
          if (rowspan && rowspan > 0) {
            return this.titleRowHeight * rowspan
          } else {
            return this.titleRowHeight
          }
        },
        // 列表中滚动条控制
        scrollControl () {
          let $view1 = $('.easytable-leftview')
          let $view2 = $('.easytable-rightview')
          let $body1 = $view1.children('div.easytable-body')
          let $body2 = $view2.children('div.easytable-body')
          $body1.bind('mousewheel DOMMouseScroll', function (e) {
            e.preventDefault()
            let e1 = e.originalEvent || window.event
            let scrollHeight = e1.wheelDelta || e1.detail * (-1)
            $body2.scrollTop($body2.scrollTop() - scrollHeight)
          })
          $body2.bind('scroll', function () {
            $body1.scrollTop($(this).scrollTop())
            let c1 = $body1.children(':first')
            let c2 = $body2.children(':first')
            if (c1.length && c2.length) {
              let top1 = c1.offset().top
              let top2 = c2.offset().top
              if (top1 !== top2) {
                $body1.scrollTop($body1.scrollTop() + top1 - top2)
              }
            }
            $view2.children('div.easytable-header').scrollLeft($(this).scrollLeft())
          })
        },
        // 获取当前元素的left、top偏移
        getViewportOffset () {
          let $window = $(window)
          let scrollLeft = $window.scrollLeft()
          let scrollTop = $window.scrollTop()
          let offset = $('.easytable').offset()
          return {
            left: offset.left - scrollLeft,
            top: offset.top - scrollTop
          }
        },
        // 随着窗口改变表格自适应
        tableResize () {
          let vm = this
          let width = vm.width
          let height = vm.height
          let minWidth = vm.minWidth
          let minHeight = vm.minHeight
          let viewOffset = vm.getViewportOffset()
          let currentWidth = $('.easytable').outerWidth()
          let currentHeight = $('.easytable').outerHeight()
          let right = $(window).width() - currentWidth - viewOffset.left
          let bottom = $(window).height() - currentHeight - viewOffset.top - 10 // -10 防止浏览器出垂直滚动条
          // （窗口宽度缩小 && 当前宽度大于最小宽度） ||（窗口宽度扩大 && 当前宽度小于最大宽度）
          if ((right < 0 && currentWidth > minWidth) || (right > 0 && currentWidth < width)) {
            currentWidth = currentWidth + right
            currentWidth = currentWidth > width ? width : currentWidth
            currentWidth = currentWidth < minWidth ? minWidth : currentWidth
            vm.newWidth = currentWidth
          }
          // （窗口高度缩小 && 当前高度大于最小高度） || （窗口高度扩大 && 当前高度小于最大高度）
          if ((bottom < 0 && currentHeight > minHeight) || (bottom > 0 && currentHeight < height)) {
            currentHeight = currentHeight + bottom
            currentHeight = currentHeight > height ? height : currentHeight
            currentHeight = currentHeight < minHeight ? minHeight : currentHeight
            vm.newHeight = currentHeight
          }
        }
      },
      mounted () {
        let vm = this
        vm.tableResize()
        vm.scrollControl()
        vm.singelSortInit()
        window.onresize = function (event) {
          vm.tableResize()
        }
      },
      watch: {
        // 重新跟新列信息
        'columns': function (newVal) {
          this.newColumns = Object.assign([], newVal)
        },
        // 重新覆盖复杂表头信息
        'titleRows': function (newVal) {
          this.newTitleRows = Object.assign([], newVal)
        }
      }
    }
</script>
<style>

.easytable-views {
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

.easytable-leftview, .easytable-rightview {
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
  top: 0px;
}

.easytable-leftview {
  left: 0px;
}

.easytable-header {
  overflow-x: hidden;
  overflow-y: hidden;
  cursor: default;
}

.easytable-header, .easytable-td-rownumber {
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  background-repeat-x: repeat;
  background-repeat-y: no-repeat;
}

.easytable-header, .easytable-toolbar, .easytable-pager, .easytable-footer-inner {
  border-color: rgba(221, 221, 221, 1);
}

.easytable-header-inner {
  float: left;
  width: 10000px;
}

.easytable-htable, .easytable-btable, .easytable-ftable {
  color: rgb(0, 0, 0);
  border-collapse: separate;
}
.easytable-header-row{
  background-color: #eee;
}
.easytable-header-row, .easytable-row {
  height: 25px;
}

.easytable-header td, .easytable-body td, .easytable-footer td {
/*    border-width: 0 1px 1px 0;
    border-style: solid;*/
  margin: 0;
  padding: 0;
    /*border-color: rgba(221, 221, 221, 1);*/
}

.easytable-cell{
  margin: 0;
  white-space: nowrap;
  word-wrap: normal;
  overflow:hidden;
  font-size: 12px;
  border-width: 0 1px 1px 0;
  border-style: solid;
  border-color: rgba(221, 221, 221, 1);
}

.easytable-header .easytable-cell {
  height: auto;
}

.easytable-header .easytable-cell span {
  font-size: 12px;
}

.easytable-sort-icon {
  padding:0;
  display: none;
}

.easytable-body {
  margin:0;
  padding:0;
  overflow-x: auto;
  overflow-y: auto;
  zoom: 1;
}

.easytable-leftview .easytable-body {
  overflow-x: hidden;
  overflow-y: hidden;
}

.easytable-leftview .easytable-body-inner {
  padding-bottom: 20px;
}

.easytable-rightview {
  right: 0px;
}

.easytable-sort-icon {
  display: inline;
  padding: 0 13px 0 0;
}

.cursorPointer {
    cursor: pointer;
}

.table-title {
    font-weight: bold;
    color:#444;
}
</style>
