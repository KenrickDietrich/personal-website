<template>
  <div class="home">
    <Header
      :title="'Hallo, ik ben Kenrick Dietrich'"
      :paragraph="
        'Ik ben 3e jaars student software engineer aan het Saxion, Welkom op mijn persoonlijke website'
      "
    ></Header>
    <Service />
    <About />
    <Portfolio />
    <Quote />
    <Info />
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
import Info from '@/components/Info';
import Quote from '@/components/Quote';

export default {
  name: 'home',
  components: {
    Contact,
    Header,
    Service,
    About,
    Portfolio,
    Info,
    Footer,
    Quote,
  },
};
</script>
