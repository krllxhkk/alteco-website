<script setup>
const values = [
  {
    icon: '01',
    title: 'Our Mission',
    text: 'Deliver quality construction, on time and on budget, through reliable partnerships.',
  },
  {
    icon: '02',
    title: 'Our Vision',
    text: 'Build lasting spaces that strengthen communities and support the next generation.',
  },
  {
    icon: '03',
    title: 'Our Values',
    text: 'Safety, integrity and craftsmanship guide every decision and every project.',
  },
]
</script>

<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="section-heading">
        <h2>Who We Are</h2>

        <p>
          We are a hands-on construction team bringing experience, care
          and precision to commercial and residential projects.
          We build with purpose, from the ground up.
        </p>
      </div>

      <div id="services" class="values-grid">
        <article
          v-for="value in values"
          :key="value.title"
          class="value-card"
        >
          <span class="value-icon">{{ value.icon }}</span>

          <div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>