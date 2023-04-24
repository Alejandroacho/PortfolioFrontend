
<template>
  <transition name="fade">
    <div class="backdrop" v-if="showModal">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >

        <header class="header" id="modalTitle">
          <slot name="header">
            This is the default tile!
          </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>
        </header>

        <section class="body" id="modalDescription">
          <slot name="body">
            This is the default body!
          </slot>
        </section>

        <footer class="footer">
          <slot name="footer">
            This is the default footer!
          </slot>
        </footer>

      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ModalComponent',
    data() {
      return {
        showModal: true,
      };
    },
    methods: {
      close() {
        this.showModal = false;
        this.$emit('close');
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
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  max-height: 90%;
}

.header {
  padding: 15px;
  display: flex;
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: $secondary-color;
  font-weight: bold;
  justify-content: space-between;
}

.body {
  position: relative;
  padding: 20px 10px;
}

.footer {
  padding: 15px;
  display: flex;
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}
</style>