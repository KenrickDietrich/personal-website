<template>
  <div>
    <base-navbar></base-navbar>
    <Header
      :title="'Hallo, ik ben Kenrick Dietrich'"
      :paragraph="
        'Ik ben 3e jaars student software engineer aan het Saxion, Welkom op mijn persoonlijke website'
      "
    ></Header>
    <About />
    <Service />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
import Header from '@/components/Header.vue';
import Service from '@/components/Service';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default {
  name: 'home',
  components: {
    BaseNavbar,
    Contact,
    Header,
    Service,
    About,
    Portfolio,
    Footer,
  },
};
</script>
