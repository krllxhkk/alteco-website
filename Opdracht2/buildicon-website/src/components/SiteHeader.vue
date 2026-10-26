<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <header class="site-header">
    <div class="topbar container">
      <a href="#" class="logo">
        <span class="logo-icon">B</span>
        BuildIcon
      </a>

      <div class="contact-info">
        <div>
          <small>EMAIL US</small>
          <a href="mailto:info@buildicon.com">info@buildicon.com</a>
        </div>

        <div>
          <small>CALL US</small>
          <a href="tel:+15551234567">+1 (555) 123-4567</a>
        </div>

        <a href="#contact" class="button button-dark">GET A QUOTE</a>
      </div>

      <button
        class="menu-toggle"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
      >
        {{ menuOpen ? '✕' : '☰' }}
      </button>
    </div>

    <nav class="navigation" :class="{ 'navigation-open': menuOpen }">
      <div class="container nav-links">
        <a href="#home" @click="menuOpen = false">Home</a>
        <a href="#about" @click="menuOpen = false">About Us</a>
        <a href="#services" @click="menuOpen = false">Services</a>
        <a href="#projects" @click="menuOpen = false">Projects</a>
        <a href="#contact" @click="menuOpen = false">Contact</a>
      </div>
    </nav>
  </header>
</template>