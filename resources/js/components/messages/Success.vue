<template>
  <b-alert :show="true" variant=" " dismissible fade class="text-white bg-success">
    <div class="mm-alert-icon">
      <i class="ri-information-line"></i>
    </div>
    <div class="mm-alert-text">
      <slot></slot>
    </div>
  </b-alert>
</template>
