<template>
  <div class="loading">
    <div class="loading-window">
    <div class="car">
        <div class="strike"></div>
        <div class="strike strike2"></div>
        <div class="strike strike3"></div>
        <div class="strike strike4"></div>
        <div class="strike strike5"></div>
        <div class="car-detail spoiler"></div>
        <div class="car-detail back"></div>
        <div class="car-detail center"></div>
        <div class="car-detail center1"></div>
        <div class="car-detail front"></div>
        <div class="car-detail wheel"></div>
        <div class="car-detail wheel wheel2"></div>
    </div>

      <div class="text">
          <span>Загрузка</span><span class = "dots">...</span>
      </div>
  </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang='less'>
@keyframes spin {
  0% {
    transform: translate(2px, 1px) rotate(0deg); }
  10% {
    transform: translate(-1px, -3px) rotate(36deg); }
  20% {
    transform: translate(-2px, 0px) rotate(72deg); }
  30% {
    transform: translate(1px, 2px) rotate(108deg); }
  40% {
    transform: translate(1px, -1px) rotate(144deg); }
  50% {
    transform: translate(-1px, 3px) rotate(180deg); }
  60% {
    transform: translate(-1px, 1px) rotate(216deg); }
  70% {
    transform: translate(3px, 1px) rotate(252deg); }
  80% {
    transform: translate(-2px, -1px) rotate(288deg); }
  90% {
    transform: translate(2px, 1px) rotate(324deg); }
  100% {
    transform: translate(1px, -2px) rotate(360deg); } }

@keyframes speed {
  0% {
    transform: translate(2px, 1px) rotate(0deg); }
  10% {
    transform: translate(-1px, -3px) rotate(-1deg); }
  20% {
    transform: translate(-2px, 0px) rotate(1deg); }
  30% {
    transform: translate(1px, 2px) rotate(0deg); }
  40% {
    transform: translate(1px, -1px) rotate(1deg); }
  50% {
    transform: translate(-1px, 3px) rotate(-1deg); }
  60% {
    transform: translate(-1px, 1px) rotate(0deg); }
  70% {
    transform: translate(3px, 1px) rotate(-1deg); }
  80% {
    transform: translate(-2px, -1px) rotate(1deg); }
  90% {
    transform: translate(2px, 1px) rotate(0deg); }
  100% {
    transform: translate(1px, -2px) rotate(-1deg); } }

@keyframes strikes {
  from {
    left: 25px; }
  to {
    left: -80px;
    opacity: 0; } }

@keyframes dots {
  from {
    width: 0px; }
  to {
    width: 15px; } }

@keyframes fadeIn {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }

span {
  font-family: Regular;
    font-size: 20px;
    color: white;
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #131313;
  z-index: 101;
}

.fadeIn, .loading-window {
  animation: fadeIn .4s both; }

.loading-window {
  background: #131313;
  border-radius: 6px;
  color: white;
  height: 200px;
  left: 50%;
  margin-left: -150px;
  margin-top: -100px;
  position: fixed;
  top: 50%;
  width: 300px;
  z-index: 99; }
  .loading-window .text {
    font-size: 16px;
    position: absolute;
    width: auto;
    top: 75%;
    left: 38%;
    margin: 0 auto; }
  .loading-window .dots {
    display: inline-block;
    width: 5px;
    overflow: hidden;
    vertical-align: bottom;
    animation: dots 1.5s linear infinite;
    transition: 1; }

.car {
  position: absolute;
  width: 117px;
  height: 42px;
  left: 92px;
  top: 70px; }
  .car .strike {
    position: absolute;
    width: 11px;
    height: 1px;
    background: white;
    animation: strikes .2s linear infinite; }
  .car .strike2 {
    top: 11px;
    animation-delay: .05s; }
  .car .strike3 {
    top: 22px;
    animation-delay: .1s; }
  .car .strike4 {
    top: 33px;
    animation-delay: .15s; }
  .car .strike5 {
    top: 44px;
    animation-delay: .2s; }
  .car-detail {
    position: absolute;
    display: block;
    background: white;
    animation: speed .5s linear infinite; }
    .car-detail.spoiler {
      width: 0;
      height: 0;
      top: 7px;
      background: none;
      border: 20px solid transparent;
      border-bottom: 8px solid white;
      border-left: 20px solid white; }
    .car-detail.back {
      height: 20px;
      width: 92px;
      top: 15px;
      left: 0px; }
    .car-detail.center {
      height: 35px;
      width: 75px;
      left: 12px;
      border-top-left-radius: 30px;
      border-top-right-radius: 45px 40px;
      border: 4px solid white;
      background: none;
      box-sizing: border-box; }
    .car-detail.center1 {
      height: 35px;
      width: 35px;
      left: 12px;
      border-top-left-radius: 30px; }
    .car-detail.front {
      height: 20px;
      width: 50px;
      top: 15px;
      left: 67px;
      border-top-right-radius: 50px 40px;
      border-bottom-right-radius: 10px; }
    .car-detail.wheel {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      top: 20px;
      left: 12px;
      border: 3px solid #333;
      background: linear-gradient(45deg, transparent 45%, white 46%, white 54%, transparent 55%), linear-gradient(-45deg, transparent 45%, white 46%, white 54%, transparent 55%), linear-gradient(90deg, transparent 45%, white 46%, white 54%, transparent 55%), linear-gradient(0deg, transparent 45%, white 46%, white 54%, transparent 55%), radial-gradient(white 29%, transparent 30%, transparent 50%, white 51%), #333;
      animation-name: spin; }
    .car-detail.wheel2 {
      left: 82px; }

</style>
