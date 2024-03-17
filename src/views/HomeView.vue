<template>
  <div class="about d-flex align-items-center justify-content-center position-relative">
    <div class="card mb-0 d-flex" style="max-width: 960px">
      <div class="row g-0">
        <div
          class="col-md-4 d-flex flex-column justify-content-between p-0"
          style="background-color: #A3D1D1"
        >
          <div class="d-flex flex-column justify-content-center pt-5 px-5 pb-3">
            <img
              src="../assets/images/5415.jpg"
              class="img-fluid rounded-circle title-img"
              alt="大頭照"
            />
            <h2 class="text-center mt-4">LIU MIN YAO</h2>
            <div class="line mt-4 position-relative"></div>
          </div>
          <ul class="d-flex justify-content-between list-unstyled mb-0 px-5 py-3">
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
        </div>
        <div class="col-md-8">
          <div class="card-body pt-5 px-5 pb-3 h-100 d-flex flex-column justify-content-between">
            <div>
              <h2 class="card-title fs-80">HELLO</h2>
              <p class="card-text fs-2">Here's who I am & what I do</p>
              <div class="card-text">
                <button type="button" class="btn btn-secondary me-2 fs-5">
                  <router-link to="/resume" class="nav-link" href="#">RESUME</router-link></button
                ><button type="button" class="btn btn-outline-secondary fs-5">
                  <router-link to="/application" class="nav-link" href="#">APPLICATION</router-link>
                </button>
              </div>
            </div>
            <p class="card-text mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, incidunt ipsum,
              omnis accusantium quaerat quasi velit quia unde delectus maxime veritatis at hic ad
              assumenda deserunt exLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              incidunt ipsum, omnis accusantium quaerat quasi velit quia unde delectus maxime
              veritatis at hic ad assumenda deserunt ex voluptatem placeat odit?dolor sit amet
              consectetur adipisicing elit. Tenetur, incidunt ipsum, omnis accusantium quaerat quasi
              velit quia unde delectus maxime veritatis at hic ad assumenda deserunt ex voluptatem
              placeat odit?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.$http.get('https://myblogapi-v3b7.onrender.com')
  }
}
</script>

<style lang="scss">
.about {
  min-height: 100vh;
  background: linear-gradient(to left, #c4e1e1 100%, #eee 50%);
  background-repeat: no-repeat;
  background-size: 50% 100%;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    z-index: 0;
  }
  .line::before {
    position: absolute;
    content: '';
    width: 30%;
    height: 1px;
    background-color: black;
    left: 50%;
    transform: translateX(-50%);
  }
  ul a {
    color: gray;
    font-size: 3em;
    &:hover {
      color: black;
    }
  }
  .card {
    box-shadow: -5px 5px 5px gray;
  }
}

.title-img {
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1 / 1;
}
</style>
