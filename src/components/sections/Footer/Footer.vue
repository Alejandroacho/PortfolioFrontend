<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="column">
        <div class="logo">
          <img src="/logo.png" alt="Logo image" draggable="false" />
          <h1>Alejandro Acho</h1>
        </div>
      </div>
      <div class="column__center">
        <p>Made with ❤️ in BCN</p>
      </div>
      <div class="column">
        <div class="links">
          <ul>
            <li><a href="#end-of-hero">About</a></li>
            <li><a @click="showTCModal = true">Terms & conditions</a></li>
            <PopperTooltip arrow>
              <li>Contact</li>
              <template #content>
                <div class="contact-div">
                  <a href="https://www.linkedin.com/in/alejandroacho/" target="_blank" class="contact-link">
                    💼 Reach me on LinkedIn
                  </a>
                  <a href="mailto: alejandroacho@hotmail.com" target="_blank" class="contact-link">
                    ✉️ Send me an email
                  </a>
                  <a href="tel:+34640518009" target="_blank" class="contact-link">
                    📞 Make me a call
                  </a>
                </div>
              </template>
            </PopperTooltip>
          </ul>
        </div>
      </div>
      <ModalComponent :show-modal="showTCModal" @close="showTCModal = false">
        <template v-slot:header>
          <h3>Terms and conditions</h3>
        </template>
        <template v-slot:body>
          <div class="body">
            <p class="terms-text">
              This page do not use cookies. By staying here you agree to not leave without following me in linkedin.
              The whole authorship of this page is mine, so if you want to use it, please contact me first.
              I got very inspired to do the wave effects from FreshJS landing page.
              PopperJS used for tooltips. Vue3 JS used for the whole page.
              For the rest, IDK what to say, I hope you like it. See ya (remember to follow me in linkedin)!
            </p>
          </div>
        </template>
      </ModalComponent>
    </div>
  </footer>
</template>

<script lang="ts">
import ModalComponent from "@/components/atoms/ModalComponent/ModalComponent.vue";

export default {
  name: "FooterSection",
  components: {ModalComponent},

  data() {
    return {
      showTCModal: false,
    };
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/colors.scss";

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
  h1 {
    padding-left: 10px;
    font-size: 1.5rem;
    margin: 0;
  }
}

.footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: $background-gray;
  color: $primary-color;
  height: 120px;
}

.footer-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 13.9vw;
}

.column {
  height: 100%;
  &__center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.links {
  display: flex;
  justify-content: center;
  text-align: end;
  max-height: 100%;
  li {
    list-style: none;
    padding: 5px 0;
    &:hover {
      cursor: pointer;
    }
  }
  a {
    color: $primary-color;
    text-decoration: none;
  }
}

.contact-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .contact-link {
    color: $secondary-color !important;
    text-decoration: none;
  }
}

.terms-text {
  color: $secondary-color
}
</style>
