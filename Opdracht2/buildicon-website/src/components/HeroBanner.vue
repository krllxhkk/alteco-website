<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    title: 'BUILDING YOUR VISION',
    description:
      'From the first blueprint to the final handover, BuildIcon delivers dependable construction for the places we live and work.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Construction workers on a building site',
  },
  {
    title: 'QUALITY IN EVERY DETAIL',
    description:
      'We combine experience, careful planning and craftsmanship to create spaces built to last.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern commercial building',
  },
  {
    title: 'BUILDING A BETTER FUTURE',
    description:
      'From residential spaces to commercial projects, we turn ideas into lasting results.',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern architectural design',
  },
]

const currentSlide = ref(0)
let slideInterval

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

function previousSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + slides.length) % slides.length
}

function goToSlide(index) {
  currentSlide.value = index
}

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <p class="eyebrow">BUILDING THE FUTURE</p>

        <h1>{{ slides[currentSlide].title }}</h1>

        <p class="hero-description">
          {{ slides[currentSlide].description }}
        </p>

        <div class="hero-buttons">
          <a href="#services" class="button button-dark">OUR SERVICES</a>
          <a href="#contact" class="button button-outline">CONTACT US</a>
        </div>

        <div class="slider-controls">
          <button
            type="button"
            class="slider-arrow"
            aria-label="Previous slide"
            @click="previousSlide"
          >
            ←
          </button>

          <button
            v-for="(slide, index) in slides"
            :key="slide.title"
            type="button"
            class="slider-dot"
            :class="{ active: currentSlide === index }"
            :aria-label="`Go to slide ${index + 1}`"
            :aria-pressed="currentSlide === index"
            @click="goToSlide(index)"
          ></button>

          <button
            type="button"
            class="slider-arrow"
            aria-label="Next slide"
            @click="nextSlide"
          >
            →
          </button>
        </div>
      </div>

      <div class="hero-image">
        <img
          :key="slides[currentSlide].image"
          :src="slides[currentSlide].image"
          :alt="slides[currentSlide].alt"
        />
      </div>
    </div>
  </section>
</template>
