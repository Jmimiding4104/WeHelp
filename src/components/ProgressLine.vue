<template>
  <li class="col-12 col-md-6 mt-3">
    <h4 class="d-flex align-items-center fs-2 fw-bold">
      {{ title }}<span class="fs-3 fw-light">（{{ stage }}）</span>
    </h4>
    <ul class="list-unstyled d-flex justify-content-between">
      <li>不通</li>
      <li>精通</li>
    </ul>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: range + '%' }"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['title', 'stage', 'range'],
  data() {
    return {}
  }
}
</script>
