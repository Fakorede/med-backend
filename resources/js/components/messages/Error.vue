<template>
  <b-alert :show="true" :variant="variant">
    <div class="mm-alert-icon">
      <i class="ri-alert-line"></i>
    </div>
    <div class="mm-alert-text">
      <slot></slot>
    </div>
  </b-alert>
</template>


<script>
export default {
  props: ['variant']
}
</script>