<template>
  <footer class="container-fluid py-3">
    <ul class="row list-unstyled justify-content-end mb-0 text-center">
      <li class="col-6 col-md-4 col-lg-2">
        <h3 class="fs-6">TELEPHONE</h3>
        <a href="tel:+886-9-84309550">0984309550</a>
      </li>
      <li class="col-6 col-md-4 col-lg-2">
        <h3 class="fs-6">EMAIL</h3>
        <a href="mailto:x6xxvx@gmail.com">x6xxvx@gmail.com</a>
      </li>
      <li class="d-none d-md-block col-4 col-lg-2">
        <h3 class="fs-6">FOLLOW</h3>
        <ul class="d-flex justify-content-around list-unstyled">
          <li>
            <a href="#"><i class="bi bi-facebook"></i></a>
          </li>
          <li>
            <a href=""><i class="bi bi-instagram"></i></a>
          </li>
          <li>
            <a href=""><i class="bi bi-github"></i></a>
          </li>
        </ul>
      </li>
    </ul>
  </footer>
</template>

<style>
footer {
  ul a {
    color: gray;
    &:hover {
      color: black;
    }
    i {
      font-size: 1.5em;
    }
  }
}
</style>
