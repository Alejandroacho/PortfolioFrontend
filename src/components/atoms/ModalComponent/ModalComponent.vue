<template>
  <transition name="fade">
    <div class="backdrop" v-if="showModal" @click="close">
      <div class="modal" role="dialog" @click.stop>
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

<script lang="ts">
export default {
  name: "ModalComponent",
  emits: ["close"],

  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    close(): void {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/colors.scss";

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
  z-index: 90 !important;
}

.modal {
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 60%;
  max-height: 90%;
  -ms-overflow-style: none; /*  Hide scrollbar for IE and Edge */
  scrollbar-width: none !important; /*  Hide scrollbar for Firefox */
  z-index: 100 !important;

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

.modal::-webkit-scrollbar {
  display: none; /*  Hide scrollbar for Chrome, Safari and Opera */
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

.close-button:hover {
  color: red;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

@media screen and (max-width: 1000px) {
  .modal {
    width: 90%;
  }
}

@media screen and (max-width: 800px) {
  .modal {
    width: 90%;
    max-height: 80%;
  }
}
</style>
