<template>
  <div class="easytable" id="easyTable">
    <div class="easytable-views" :style="{'height': newHeight+'px'}">
      <!--左列-->
      <template v-if="frozenCols.length > 0">
        <div class="easytable-leftview" :style="{'width':leftViewWidth+'px'}">
          <!--左列头-->
          <div class="easytable-header"
               :style="{'width': leftViewWidth+'px', 'height':titleRowHeight+1+'px','background-color':titleBgColor}">
            <div class="easytable-header-inner" style="display: block;">
              <table class="easytable-htable" border="0" cellspacing="0" cellpadding="0">
                <thead>
                  <template v-if="newTitleRows.length > 1">  <!--表头行数超过一行-->
                    <tr v-for="n in newTitleRows.length">
                      <th v-if="needCheckBox" class="easytable-cell">
                        <input type="checkbox" name="checkTotal" @click='checkAll'></th>
                      <th class="easytable-cell" v-for="item1 in newTitleRows[n-1]"
                          :colspan="item1.colspan"
                          :rowspan="item1.colspan>0 || n === newTitleRows.length ? 0:newTitleRows.length+1-n"
                          :style="{'width':item1.width+'px','height':titleRowHeight+'px','line-height':titleRowHeight+'px','text-align':item1.align}">
                        {{ item1.title }}
                        <span class="caret-wrapper" v-if="item1.orderBy" @click="sortData"> <!--排序上下图标显示-->
                          <i class="sort-caret ascending"></i>
                          <i class="sort-caret descending"></i>
                        </span>
                      </th>
                    </tr>
                  </template>
                  <template v-else> <!--表头行数一行-->
                    <tr>
                      <th v-if="needCheckBox" class="easytable-cell" style="width:30px;text-align:center">
                        <input type="checkbox" name="checkTotal" @click='checkAll'></th>
                      <th v-for="col in frozenCols" class="easytable-cell"
                          v-show="col.isFrozen === true"
                          :style="{'width':col.width+'px','height':titleRowHeight+'px','line-height':titleRowHeight+'px','text-align':col.align}">
                        {{ col.title }}
                        <span class="caret-wrapper" v-if="col.orderBy" @click="sortData"> <!--排序上下图标显示-->
                          <i class="sort-caret ascending"></i>
                          <i class="sort-caret descending"></i>
                        </span>
                      </th>
                    </tr>
                  </template>
                </thead>
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
                  <td v-if="needCheckBox" class="easytable-cell"
                      :style="{'width':'30px','text-align':'center','display':'block','height': rowHeight+'px','line-height':rowHeight+'px'}">
                    <input type="checkbox" name="checkItem" @click='checkItem'></td> <!--显示checkbox-->
                  <td v-for="col in frozenCols">
                    <div class="easytable-cell"
                         :style="{'width':col.width+'px','height': rowHeight+'px','line-height':rowHeight+'px','text-align':col.align}">
                      <template v-if="col.type === 'image'">  <!--显示图片类型-->
                        <img :src="item[col.field]" :height="rowHeight">
                      </template>
                      <template v-else>
                        <template v-if="typeof col.componentName ==='string'">
                          <component :rowData="item" :is="col.componentName"></component>
                        </template>
                        <template v-else>
                          <span v-if="typeof col.format==='function'" v-html="col.format(item)"></span>
                          <span v-else>{{item[col.field]}}</span>
                        </template>
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
        <div class="easytable-header" :style="{'width': (rightViewWidth-20)+'px','background-color':titleBgColor}">
          <div class="easytable-header-inner" style="display: block;">
            <table class="easytable-htable" border="0" cellspacing="0" cellpadding="0">
              <thead>
                <template v-if="newTitleRows.length > 1">  <!--表头行数超过一行-->
                  <tr v-for="n in newTitleRows.length">
                    <th v-if="needCheckBox" class="easytable-cell">
                      <input type="checkbox" name="checkTotal" @click='checkAll'></th>
                    <th class="easytable-cell" v-for="item1 in newTitleRows[n-1]"
                        :colspan="item1.colspan"
                        :rowspan="item1.colspan>0 || n === newTitleRows.length ? 0:newTitleRows.length+1-n"
                        :style="{'width':item1.width+'px','height':titleRowHeight+'px','line-height':titleRowHeight+'px','text-align':item1.align}">
                      {{ item1.title }}
                      <span class="caret-wrapper" v-if="item1.orderBy" @click="sortData"> <!--排序上下图标显示-->
                        <i class="sort-caret ascending"></i>
                        <i class="sort-caret descending"></i>
                      </span>
                    </th>
                  </tr>
                </template>
                <template v-else> <!--表头行数一行-->
                  <tr>
                    <th v-if="needCheckBox" class="easytable-cell" style="width:30px;text-align:center">
                      <input type="checkbox" name="checkTotal" @click='checkAll'></th>
                    <th v-for="col in columns" class="easytable-cell"
                        v-show="col.isFrozen !== true"
                        :style="{'width':col.width+'px','height':titleRowHeight+'px','line-height':titleRowHeight+'px','text-align':col.align}">
                      {{ col.title }}
                      <span class="caret-wrapper" v-if="col.orderBy" @click="sortData"> <!--排序上下图标显示-->
                        <i class="sort-caret ascending"></i>
                        <i class="sort-caret descending"></i>
                      </span>
                    </th>
                  </tr>
                </template>
              </thead>
            </table>
          </div>
        </div>
        <!--右列内容-->
        <div class="easytable-body"
             :style="{'width': rightViewWidth+'px', 'margin-top': '0px', 'height': rightViewHeight+'px'}">
          <table class="easytable-btable" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr v-for="(item,index) in tableData" class="easytable-row">
                <td v-if="needCheckBox" class="easytable-cell"
                    :style="{'width':'30px','text-align':'center','display':'block','height': rowHeight+'px','line-height':rowHeight+'px'}">
                  <input type="checkbox" name="checkItem" @click='checkItem'></td> <!--显示checkbox-->
                <td v-for="col in noFrozenCols">
                  <div class="easytable-cell" v-if="col.hoverShow && col.hoverShow.length>0"
                       :style="{'width':col.width+'px','height': rowHeight+'px','line-height':rowHeight+'px','text-align':col.align}"> <!--hover 显示隐藏数据-->
                    <span class="easytable-tag" @mouseenter='handleMouseEnter($event, col.hoverShow)' @mouseleave='handleMouseLeave($event)'>
                      {{item[col.field]}}
                    </span>
                  </div>
                  <div class="easytable-cell" v-else
                       :style="{'width':col.width+'px','height': rowHeight+'px','line-height':rowHeight+'px','text-align':col.align}">
                    <template v-if="col.field === 'img'"> <!--显示图片类型-->
                      <img :src="item[col.field]" :height="rowHeight">
                    </template>
                    <template v-else>
                      <template v-if="typeof col.componentName ==='string'">
                        <component :rowData="item" :is="col.componentName"></component>
                      </template>
                      <template v-else>
                        <span v-if="typeof col.format==='function'" v-html="col.format(item)"></span>
                        <span v-else>{{item[col.field]}}</span>
                      </template>
                    </template>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <v-popover :show="showPopper" :setObj="popperObj">
      <template v-for="item in popperData">
        <p>{{ item.name }} : {{ item.value }}</p>
      </template>
    </v-popover>
  </div>
</template>

<script>
    import $ from 'jquery'
    import vPopover from 'components/Common/vPopover'
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
        },
        needCheckBox: {
          type: Boolean,
          default: false
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
          newTitleRows: Object.assign([], this.titleRows),
          // 获取选中checkbox列表
          checkBoxList: [],
          // hover 显示补充内容
          showPopper: false,
          popperObj: {},
          popperData: {}
        }
      },
      watch: {
        // 重新跟新列信息
        columns (newVal) {
          this.newColumns = Object.assign([], newVal)
        },
        // 重新覆盖复杂表头信息
        'titleRows': function (newVal) {
          this.newTitleRows = Object.assign([], newVal)
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
          return this.newWidth - this.leftViewWidth - 2
        },
        // 右侧区域高度
        rightViewHeight () {
          if (this.newTitleRows.length > 0) {
            return this.newHeight - this.titleRowHeight * this.newTitleRows.length + 1
          } else {
            return this.newHeight - this.titleRowHeight + 1
          }
        },
        // 将复杂表头配置数据简单化
        titleRowsToSortInfo () {
          let result = []
          let self = this
          if (self.newTitleRows.length > 0) {
            self.newTitleRows.filter(function (row) {
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
        // 排序
        sortData (e) {
          let sortClass = e.target.className
          let sortName = e.target.parentNode.parentNode.innerText.trim()
          if (sortClass.indexOf('descending') !== -1) {
            e.target.parentNode.children[0].style.borderBottomColor = ''
            e.target.style.borderTopColor = 'red'
            this.tableData.sort(this.orderByData(sortName, 'desc'))
          } else if (sortClass.indexOf('ascending') !== -1) {
            e.target.parentNode.children[1].style.borderTopColor = ''
            e.target.style.borderBottomColor = 'red'
            this.tableData.sort(this.orderByData(sortName, 'asc'))
          }
        },
        orderByData (sortName, type) {
          let items = this.columns.filter(function (item) {
            return item.title === sortName
          })
          let property = items[0].field
          return function (a, b) {
            if (type === 'desc') {
              return b[property].localeCompare(a[property])
            } else if (type === 'asc') {
              return a[property].localeCompare(b[property])
            }
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
            $body2.scrollTop($(this).scrollTop() - scrollHeight)
          })
          $body2.bind('scroll', function () {
            $body1.scrollTop($(this).scrollTop())
            let c1 = $body1.children(':first')
            let c2 = $body2.children(':first')
            if (c1.length && c2.length) {
              let top1 = c1.offset().top
              let top2 = c2.offset().top
              top2 = top2 === 0 ? top1 : top2 // 组件切换时左右滚动不联动异常处理代码
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
          let self = this
          let width = self.width
          let height = self.height
          let minWidth = self.minWidth
          let minHeight = self.minHeight
          let viewOffset = self.getViewportOffset()
          let currentWidth = $('.easytable').outerWidth()
          let currentHeight = $('.easytable').outerHeight()
          let right = $(window).width() - currentWidth - viewOffset.left
          let bottom = $(window).height() - currentHeight - viewOffset.top - 10 // -10 防止浏览器出垂直滚动条
          // （窗口宽度缩小 && 当前宽度大于最小宽度） ||（窗口宽度扩大 && 当前宽度小于最大宽度）
          if ((right < 0 && currentWidth > minWidth) || (right > 0 && currentWidth < width)) {
            currentWidth = currentWidth + right
            currentWidth = currentWidth > width ? width : currentWidth
            currentWidth = currentWidth < minWidth ? minWidth : currentWidth
            self.newWidth = currentWidth
          }
          // （窗口高度缩小 && 当前高度大于最小高度） || （窗口高度扩大 && 当前高度小于最大高度）
          if ((bottom < 0 && currentHeight > minHeight) || (bottom > 0 && currentHeight < height)) {
            currentHeight = currentHeight + bottom
            currentHeight = currentHeight > height ? height : currentHeight
            currentHeight = currentHeight < minHeight ? minHeight : currentHeight
            self.newHeight = currentHeight
          }
        },
        // 选中所有checkbox
        checkAll (e) {
          let self = this
          let isChecked = e.target.checked
          $("input[name='checkItem']").prop('checked', isChecked)
          let note = 'None'
          if (isChecked === true) {
            note = 'All'
            for (let i = 0; i < self.tableData.length; i++) {
              self.checkBoxList.push(self.tableData[i].name)
            }
          } else {
            self.checkBoxList = []
          }
          this.$emit('backData', {check: note})
        },
        // 选中某个checkbox，返回选中行数据
        checkItem (e) {
          let self = this
          let index = e.target.parentNode.parentNode.rowIndex
          let indexdata = self.tableData[index]
          let isChecked = e.target.checked
          if (isChecked) {
            self.checkBoxList.push(indexdata.name)
          } else {
            let i = self.checkBoxList.indexOf(indexdata.name)
            if (i > -1) {
              self.checkBoxList.splice(i, 1)
            }
          }
          this.$emit('backData', {check: self.checkBoxList})
        },
        // hover 显示
        handleMouseEnter (e, item) {
          let self = this
          let top = e.target.getBoundingClientRect().top - self.minHeight
          let h = top > 0 ? top + 'px' : 0
          e.target.style.backgroundColor = 'red'
          self.popperObj = {
            left: e.target.parentNode.style.width,
            top: h
          }
          self.showPopper = true
          self.popperData = self.tableData.filter(function (d) {
            if (d.name === e.target.innerText) {
              return d
            }
          })
          let temp = []
          item.filter(function (d) {
            temp.push({
              name: d.title,
              value: self.popperData[0][d.field]
            })
          })
          self.popperData = temp
          clearTimeout(self._timer)
        },
        handleMouseLeave (e) {
          e.target.style.backgroundColor = '#8492a6'
          this.showPopper = false
          this._timer = setTimeout(() => {
            this.showPopper = false
          }, 200)
        }
      },
      mounted () {
        let self = this
        self.tableResize()
        self.scrollControl()
        window.onresize = function (event) {
          self.tableResize()
        }
      },
      components: {
        vPopover
      }
    }
</script>
<style>
.easytable {
  position:relative;
}
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

.easytable-header th, .easytable-body td, .easytable-footer td {
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

/*上下排序图标显示 -- begin*/

.easytable-views .caret-wrapper {
  position: relative;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
  height: 34px;
  overflow: initial;
}
.easytable-views .caret-wrapper .sort-caret {
    display: inline-block;
    width: 0;
    height: 0;
    border: 0;
    content: "";
    position: absolute;
    left: 3px;
    z-index: 2;
}

.easytable-views .sort-caret.descending {
    bottom: 11px;
    border-top: 5px solid #99a9bf;
    border-bottom: none;
}
.easytable-views .sort-caret.ascending {
    top: 11px;
    border-top: none;
    border-bottom: 5px solid #99a9bf;
}
.easytable-views .sort-caret.ascending, .easytable-views .sort-caret.descending {
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
}

/*上下排序图标显示 -- end*/

.easytable-tag{
    background-color: #8492a6;
    display: inline-block;
    padding: 0 5px;
    height: 24px;
    line-height: 22px;
    font-size: 12px;
    color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid transparent;
    white-space: nowrap;
}

</style>
