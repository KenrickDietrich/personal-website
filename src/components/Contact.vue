<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="form-title">
          <div
            class="wow fadeInUp section-title animated"
            data-wow-delay="0.2s"
            style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
          >
            <h2>Get in touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur venenatis
              tincidunt.
            </p>
          </div>
        </div>

        <div class="col-md-7 col-sm-10">
          <!-- CONTACT FORM HERE -->
          <div
            class="wow fadeInUp animated"
            data-wow-delay="0.4s"
            style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
          >
            <form id="contact-form" action="#" method="get">
              <div class="col-md-6 col-sm-6">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Naam"
                  required=""
                />
              </div>
              <div class="col-md-6 col-sm-6">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div class="col-md-12 col-sm-12">
                <textarea
                  class="form-control"
                  rows="5"
                  name="message"
                  placeholder="Bericht"
                  required=""
                ></textarea>
              </div>
              <div
                class="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6 submit"
              >
                <button
                  id="submit"
                  type="submit"
                  class="button"
                  name="submit"
                >
                  Verstuur bericht
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="col-md-5 col-sm-8 contact">
          <div>
            <div class="section-title">
              <h2>Contact Info</h2>
              <p>
                Lorem ipsum dolor sit consectetur adipiscing morbi
                venenatis et tortor consectetur adipisicing lacinia
                tortor morbi ultricies.
              </p>
            </div>

            <p></p>
            <p>
              <i class="fa fa-comment"></i>
              <a href="mailto:kenrickdietrich@gmail.com"
                >kenrickdietrich@gmail.com</a
              >
            </p>
            <p><i class="fas fa-phone"></i>06 39 27 14 49</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
};
</script>
