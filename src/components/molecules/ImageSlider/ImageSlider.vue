<template>
    <div class="carousel">
        <div class="carousel-inner">
            <transition :name="transitionEffect" v-for="(slide, index) in slides" v-bind:key="index">
                <div
                    class="carousel-item"
                    v-show="currentSlide === index"
                >
                    <img :src="slide" :alt="`Slide image ${index}`"/>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>

export default {
    name: "ImageSlider",
    data: () => ({
        currentSlide: 0,
        slideInterval: null,
        direction: "right",
        slides: ["https://picsum.photos/900/400", "https://picsum.photos/900/400"],
        interval: 5000
    }),
    methods: {
        setCurrentSlide(index) {
            this.currentSlide = index;
        },
        prev(step = -1) {
            const index =
                this.currentSlide > 0
                    ? this.currentSlide + step
                    : this.slides.length - 1;
            this.setCurrentSlide(index);
            this.direction = "left";
            this.startSlideTimer();
        },
        _next(step = 1) {
            const index =
                this.currentSlide < this.slides.length - 1
                    ? this.currentSlide + step
                    : 0;
            this.setCurrentSlide(index);
            this.direction = "right";
        },
        next(step = 1) {
            this._next(step);
            this.startSlideTimer();
        },
        startSlideTimer() {
            this.stopSlideTimer();
            this.slideInterval = setInterval(() => {
                this._next();
            }, this.interval);
        },
        stopSlideTimer() {
            clearInterval(this.slideInterval);
        },
        switchSlide(index) {
            const step = index - this.currentSlide;
            if (step > 0) {
                this.next(step);
            } else {
                this.prev(step);
            }
        },
    },
    mounted() {
        this.startSlideTimer();
    },
    beforeUnmount() {
        this.stopSlideTimer();
    },
    computed: {
        transitionEffect() {
            return this.direction === "right" ? "slide-out" : "slide-in";
        },
    },
};
</script>

<style scoped>
.carousel {
    display: flex;
    justify-content: center;
}
.carousel-inner {
    position: relative;
    width: 900px;
    height: 400px;
    overflow: hidden;
}


.carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
    transition: all 1s ease-in-out;
}
.slide-in-enter-from {
    transform: translateX(-100%);
}
.slide-in-leave-to {
    transform: translateX(100%);
}
.slide-out-enter-from {
    transform: translateX(100%);
}
.slide-out-leave-to {
    transform: translateX(-100%);
}
</style>