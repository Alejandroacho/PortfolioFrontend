<template>
  <transition name="fade">
    <div class="backdrop" v-if="showModal">
      <div class="modal" role="dialog">
        <header class="modal__header">
          <slot name="header"> </slot>
          <button @click="close" class="close-button">x</button>
        </header>

        <section class="modal__body">
          <slot name="body"> </slot>
        </section>

        <footer class="modal__footer">
          <slot name="footer"> </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
@import "../../../assets/colors.scss";

.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  max-height: 90%;
  min-width: 80%;

  &__header {
    padding: 15px;
    display: flex;
    position: relative;
    color: $secondary-color;
    font-weight: bold;
    justify-content: space-between;
  }

  &__body {
    position: relative;
    padding: 20px 10px;
  }

  &__footer {
    padding: 15px;
    display: flex;
    flex-direction: column;
  }
}

.close-button {
  position: absolute;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: $black;
  background: transparent;
  margin-right: 2%;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
