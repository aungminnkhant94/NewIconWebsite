<template>
        <nav class="navbar navbar-expand-lg navbar-light mb-3">
            <!-- <a class="navbar-brand" href="#">
             <img src="./assets/img/logo.jpg" alt="logo" width="40" height="38" class="d-inline-block align-text-top">
              New Icon
            </a> -->
            <router-link to="/" class="navbar-brand d-lg-none d-sm-block">
             <img src="./assets/img/logo.jpg" alt="logo" width="45" height="42" class="d-inline-block align-text-center"></router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">

              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <router-link to="/" class="nav-link fs-5" aria-current="page">Home</router-link>
                </li>
                <li class="nav-item">
                  <a href="/#services" class="nav-link fs-5" aria-current="page" >Services</a>
                </li>
                <!-- <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Collections
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><router-link to="/suits" class="dropdown-item">Suits</router-link></li>
                    <li><router-link to="/shirts" class="dropdown-item">Shirts</router-link></li>
                    <li><router-link to="/trousers" class="dropdown-item">Trousers</router-link></li>
                    <li><router-link to="/accessories" class="dropdown-item">Accessories</router-link></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Fabrics
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> -->
                <router-link to="/" class="navbar-brand d-none d-lg-block">
                 <img src="./assets/img/logo.jpg" alt="logo" width="45" height="42" class="d-inline-block align-text-center"> New Icon
                </router-link>
                <li class="nav-item">
                  <a class="nav-link fs-5" aria-current="page" href="/#reviews">Reviews</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link fs-5" aria-current="page" href="/#contact">Contact Us</a>
                </li>
              </ul>
            </div>
        </nav>
  <router-view/>
  <footer class="footer" id="contact">
    <router-link to="/">
      <div class="footer__logo-box">
        <img src="./assets/img/footer.jpg" alt="Full logo" class="footer__logo">
      </div>
    </router-link>
    <div class="row">
      <div class="col-1-of-3">
        <h3 class="heading-footer u-center-text">
          <router-link to="/our-story.html" class="our__story">Our Story</router-link>
          <!-- <a href="" class="our__story">Our Story</a> -->
        </h3>
        <p class="footer__paragraph">
          At New Icon, we create suits that are more than your expectations. From choosing the fabric to selecting the suit type, we are helping you to find and get a perfect-fitted suit for your desire occasion.
          Established in 2017, New Icon Custom Tailor always provide the quality of services in accordance with the values set by the standard.
        </p>
      </div>
      <div class="col-1-of-3">
        <h3 class="heading-footer u-center-text">
          Contact Information
        </h3>
        <ul class="footer__data">
          <li class="footer__information">
            <i class="footer__information--icon far fa-phone"></i>09422242425
          </li>
          <li class="footer__information">
            <i class="footer__information--icon far fa-address-book"></i> No.5A, E-02, Ground Floor, Tabin Shwe Htee Street, Near Aung Zaya Road, 14 Qtr, Kyauk Kone, Yankin, Yangon
          </li>
          <li class="footer__information">
            <i class="footer__information--icon far fa-envelope"></i> newiconcustomtailor@gmail.com
          </li>
        </ul>
      </div>
      <div class="col-1-of-3">
        <h3 class="heading-footer u-center-text">
          Social Media Links
        </h3>
        <ul class="footer__data">
          <a href="#">
            <li class="footer__information">
              <i class="footer__information--icon fab fa-facebook-f"></i> New Icon Custom Tailor
            </li>
          </a>
          <a href="#">
            <li class="footer__information">
              <i class="footer__information--icon fab fa-instagram"></i> newicontailor
            </li>
          </a>
        </ul>
      </div>
    </div>
    <div>
      <p class="footer__copyright">
        Copyright &copy; 2022, All rights reserved By
          <span>New Icon Custom Tailor</span>
      </p>
    </div>
  </footer>
</template>

<style>

</style>

<script>
export default {
  components: {
  }
}
</script>
