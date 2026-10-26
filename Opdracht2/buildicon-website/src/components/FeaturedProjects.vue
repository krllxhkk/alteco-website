<script setup>
const projects = [
  {
    title: 'Riverside Office Center',
    category: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Oakwood Residences',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Northgate Logistics Hub',
    category: 'Industrial',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cedar House Renovation',
    category: 'Renovation',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Westside Community Center',
    category: 'Public Spaces',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Parkview Apartments',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80',
  },
]
</script>

<template>
  <section id="projects" class="projects section">
    <div class="container">
      <div class="section-heading">
        <h2>Featured Projects</h2>

        <p>
          A selection of spaces we have built, transformed
          and delivered for our clients.
        </p>
      </div>

      <div class="projects-grid">
        <article
          v-for="project in projects"
          :key="project.title"
          class="project-card"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />

            <a href="#contact" class="project-overlay">
              VIEW PROJECT →
            </a>
          </div>

          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <span>{{ project.category }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>