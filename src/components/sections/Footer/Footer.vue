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
            <li><a href="">About</a></li>
            <li><a href="">Terms & conditions</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "FooterSection",
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
  justify-content: space-around;
  padding: 0 47px;
  margin: 0 30px;
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
  padding-right: 13px;
  li {
    list-style: none;
    padding: 5px 0;
  }
  a {
    color: $primary-color;
    text-decoration: none;
  }
}
</style>
