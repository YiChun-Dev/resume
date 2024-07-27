<script setup lang="ts">
import { ref } from 'vue'

interface NavItem {
  id: number
  name: string
  href: string
}

const brandName: string = 'Yi-Chun'

const navItems = ref<NavItem[]>([
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Services', href: '#services' },
  { id: 4, name: 'Experience', href: '#experience' },
  { id: 5, name: 'Works', href: '#works' },
  { id: 6, name: 'Blog', href: '#blog' },
  { id: 7, name: 'Contact', href: '#contact' },
])
</script>

<template>
  <!-- desktop header -->
  <header class="fixed-top">

    <div class="container">

      <nav id="navbar" class="navbar navbar-expand-lg" data-bs-theme="dark">
        <a class="navbar-brand" href="">
          {{ brandName }}
          <div class="small-red-square-wrapper">
            <div class="small-red-square" />
          </div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-for="item in navItems" :key="item.id">
              <a class="nav-link" :href="item.href" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </nav>

    </div>

  </header>
</template>

<style scoped>
/* Header Styles */
header {
  background: #353353;
  padding: 20px 0;
  border-bottom: solid 1px rgba(255, 255, 255, .1);
}

header .navbar {
  padding: 0;
}

header .navbar-brand {
  padding-top: 0;
  padding-bottom: 0;
  font-weight: 600;
  height: 34.8px;
  font-size: 34.8px;
  display: flex;
  align-items: center;
}

.small-red-square-wrapper {
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding: 5px 2px;
}

.small-red-square {
  width: 6px;
  height: 6px;
  background-color: rgb(255, 76, 96);
  border-radius: 1px;
}

header .navbar .navbar-nav .nav-link {
  color: #FFF;
}

header .nav-link {
  font-size: 16px;
  font-weight: 700;
  padding: 0;
}

header .nav-link.active,
header .nav-link:hover {
  color: #FFD15C !important;
}

header button.navbar-toggler:focus {
  outline: 0;
  box-shadow: none;
}

header .navbar-nav li:not(:last-child) {
  padding-right: 3rem;
}

@media (min-width: 992px) {
  header .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
  }
}

@media only screen and (max-width: 991px) {
  header .nav-link {
    padding: 7px 0;
  }
}
</style>