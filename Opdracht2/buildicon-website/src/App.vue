<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroBanner from './components/HeroBanner.vue'
import WhoWeAre from './components/WhoWeAre.vue'
import FeaturedProjects from './components/FeaturedProjects.vue'
</script>

<template>
  <SiteHeader />

  <main>
    <HeroBanner />
    <WhoWeAre />
    <FeaturedProjects />
  </main>

  <footer id="contact" class="footer">
    <div class="container footer-content">
      <a href="#home" class="logo">
        <span class="logo-icon">B</span>
        BuildIcon
      </a>

      <p>Building your vision, from the ground up.</p>

      <a href="mailto:info@buildicon.com">
        info@buildicon.com
      </a>
    </div>
  </footer>
</template>