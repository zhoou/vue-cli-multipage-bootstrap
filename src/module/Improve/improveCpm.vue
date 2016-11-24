<template id="ImproveDemo">
  <div class="panel panel-primary">
      <div class="panel-heading">三、Vue.js 提高</div>
      <div class="panel-body">
        <div class="bs-example">
          <h4>为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调在 DOM 更新完成后就会调用。</h4>
          <nextTickCpm></nextTickCpm>
        </div>
        <div class="bs-example">
          <h4> CSS 过渡和动画 ：transition 封装组件</h4>
          <transEffectCpm></transEffectCpm>
        </div>
        <div class="bs-example">
          <h4> 过渡状态 </h4>
          <transStateCpm></transStateCpm>
        </div>
        <div class="pagelink">
          <a href="./startdemo.html" class="btn">&lt;&lt;基础篇: base</a>
          <a href="./advancedemo.html" class="btn">进阶篇：advance&gt;&gt;</a>
        </div>
      </div>
    </div>
</template>

<script>
    import nextTickCpm from 'components/Improve/nextTickCpm'
    import transEffectCpm from 'components/Improve/transEffectCpm'
    import transStateCpm from 'components/Improve/transStateCpm'

    export default{
      name: 'ImproveDemo',
      components: {
        nextTickCpm,
        transEffectCpm,
        transStateCpm
      }
    }
</script>
