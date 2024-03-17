<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light p-3">
    <div class="container-fluid">
      <router-link to="/home" class="nav-link fw-bold fs-3 d-flex h1-hover"
        ><i class="bi bi-bar-chart-fill d-flex align-items-center me-3"></i>
        <h1 class="m-0">LIU MIN YAO</h1></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-0 mt-3 mt-md-0 w-100 justify-content-end text-center">
          <li class="nav-item">
            <router-link to="/home" class="nav-link border-bottom" href="#">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume" class="nav-link border-bottom" href="#">RESUME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/application" class="nav-link" aria-current="page" href="#"
              >APPLICATION</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.h1-hover:hover {
  color: gray;
}
</style>
