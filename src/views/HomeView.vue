<template>
  <div class="home">

    <div class="header">
      <div class="header-content">
        <div class="yellow-brick"></div>
        <div class="content">
          <h1>Gudo fabi</h1>
          <p>Frontend developer, teacher, and web junkie. I love creating new things, discovering designing trends, and  transforming ideas into reality.</p>
        </div>
      </div>
      <div class="header-img">
        <img src="/images/astro.png" alt="Gudo Fabi">
      </div>
    </div>

    <div class="scroll-down mt-10 mb-28">
      <a href="" class="flex flex-col items-center justify-center">
        <p class="mb-3">Keep Scrolling</p>
        <fa :icon="['fas','arrow-down']" size="2x" />
      </a>
    </div>

    <div class="about">
      <img src="/images/about-bg-circle.svg" alt="" class="about-bg-img absolute">
      <img src="/images/balloon.png" alt="" class="about-balloon-img absolute">
      <div class="astro-img">
        <img src="/images/astro-3.png" alt="About Astro">
      </div>
      <div class="about-content">
        <h3>About me...</h3>
        <p class="about-p">2016 I started my journey as a <span>web developer</span>, I started as a layout designer. But designing is not enough, That's why I teach myself how to code to give <span>life to my designs</span>.</p>
        <p class="about-p">I've been into sorts of projects, That helped me improve my skills. And I lead projects too, a few times.</p>
        <p class="qoute-message">“If a potato can become vodka, you can become a Web Developer.”</p>
        <p class="qoute-owner">-anonymous</p>
      </div>
    </div>

    <div class="services">
      <h3 class="text-center">Service offered:</h3>
      <div class="services-container">
        <div class="card">
          <div class="img-cover">
            <img src="/images/web-design.svg" alt="">
          </div>
          <span>Web Design</span>
        </div>
        <div class="card">
          <div class="img-cover">
            <img src="/images/web-app.svg" alt="">
          </div>
          <span>Web App<br> Development</span>
        </div>
        <div class="card">
          <div class="img-cover">
            <img src="/images/project-management.svg" alt="">
          </div>
          <span>Project<br> Management</span>
        </div>
      </div>
    </div>

    <div class="contact">
      <img src="/images/full-moon.png" alt="">
      <div class="content">
        <h3 class="text-center">Get in Touch.</h3>
        <p>Do you have questions or are you interested in working together, you can visit the links.</p>
        <ul>
          <li class="mr-4">
            <a href="" target="_blank">
              <fa :icon="['fab', 'behance-square']" />
            </a>
          </li>
          <li class="mr-4">
            <a href="" target="_blank">
              <fa :icon="['fab', 'linkedin']" />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <fa :icon="['fab', 'pinterest-square']" />
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home {
  h3 {
    @apply font-holiday text-4xl mb-6 leading-[1.9];
  }
  .header {
    @apply flex items-end justify-around max-w-[920px] w-full mx-auto;

    .header-content {
      @apply relative w-[505px] h-[370px] flex flex-col justify-center;

      .yellow-brick {
        @apply absolute w-[222px] h-full left-0 top-0 bg-gf-yellow -z-10;

      }
      .content {
        @apply max-w-[470px] w-full ml-11;

        h1 {
          @apply font-holiday text-black text-[96px] w-full mb-8 tracking-tight;
        }

        p {
          @apply leading-7 tracking-widest;
        }

      }
    }

  }

  .about {
    @apply relative flex max-w-[900px] mx-auto items-start justify-between mb-36;

    .about-bg-img {
      @apply -z-10 bottom-0 left-[13%];
    }
    .about-balloon-img {
      @apply right-8 -top-32 -z-10;
    }

    .astro-img {
      @apply w-1/2;

    }
    .about-content {
      @apply w-1/2;

      p {
        @apply text-black tracking-widest leading-7 mb-4;

        span {
          @apply text-gf-dark-yellow font-semibold;

        }
      }

      .qoute-message {
        @apply text-gray-500 italic pt-4;
      }

      .qoute-owner {
        @apply text-gray-600 font-semibold text-right;
      }
    }

  }

  .services {
    @apply max-w-[900px] mx-auto mb-28;

    .services-container {
      @apply flex justify-between items-center;

      .card {
        @apply flex items-center bg-white rounded-xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-gf-yellow py-5 px-9 transition-all;

        .img-cover {
          @apply w-20 h-20 mr-5;

          img {
            @apply w-full h-full object-contain;

          }
        }
        span {
          @apply leading-[1.5] tracking-wider;
        }
      }
    }
  }

  .contact {
    @apply pt-20 pb-16 relative overflow-hidden;

    img {
      @apply absolute max-w-[700px] w-full h-auto mr-[-350px] ml-[-350px] right-1/2 left-1/2 -z-10 top-0 animate-spin-slow;
    }
    .content {
      @apply  mx-auto max-w-[522px] w-full text-center;

      p {
        @apply tracking-widest leading-normal mb-10;
      }
      
      ul {
        @apply flex items-center justify-center;

        li  a svg{
          @apply h-11 w-11 hover:text-gf-yellow transition-all;

        }
      }
    }
  }
}
</style>