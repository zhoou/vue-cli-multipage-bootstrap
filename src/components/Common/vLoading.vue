<template id="loading">
  <div class="loading-overlay" v-show="showLoading">
    <div class="sk-three-bounce">
      <div class="sk-child sk-bounce1"></div>
      <div class="sk-child sk-bounce2"></div>
      <div class="sk-child sk-bounce3"></div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'loading',
    props: {
      showLoading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style>
.loading-overlay {
	content: "";
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	opacity: 1;
	background: rgba(0, 0, 0, 0.5);
	transition: all .6s;
}

.sk-three-bounce {
	position: absolute;
	top: 50%;
	left: 50%;
}

.sk-three-bounce .sk-child {
	width: 20px;
	height: 20px;
	background-color: salmon;
	border-radius: 100%;
	display: inline-block;
	-webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
	animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
}

.sk-three-bounce .sk-bounce1 {
	-webkit-animation-delay: -0.32s;
	animation-delay: -0.32s;
}

.sk-three-bounce .sk-bounce2 {
	-webkit-animation-delay: -0.16s;
	animation-delay: -0.16s;
}

@-webkit-keyframes sk-three-bounce {
	0%,
	80%,
	100% {
		-webkit-transform: scale(0);
		transform: scale(0);
	}
	40% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
}

@keyframes sk-three-bounce {
	0%,
	80%,
	100% {
		-webkit-transform: scale(0);
		transform: scale(0);
	}
	40% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
}
</style>

