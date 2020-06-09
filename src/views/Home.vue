<template>
  <div class="home">
    <Header
      :title="'Hallo, ik ben Kenrick Dietrich'"
      :paragraph="
        'Ik ben 3e jaars student software engineer aan het Saxion, Welkom op mijn persoonlijke website'
      "
    ></Header>
    <About />
    <Service />
    <Portfolio />
    <!-- <Quote /> -->
    <!-- <Info /> -->
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Service from '@/components/Service';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default {
  name: 'home',
  components: {
    Contact,
    Header,
    Service,
    About,
    Portfolio,
    Footer,
  },
};
</script>
