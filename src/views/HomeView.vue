<template>
  <div class="home">

    <div class="header">
      <div class="header-container">
        <div class="header-content">
          <div class="yellow-brick"></div>
          <div class="content">
            <h1>Gudo fabi</h1>
            <p>Frontend developer, teacher, and web junkie. I love creating new things, discovering designing trends, and  transforming ideas into reality.</p>
            <img src="/images/astro-helmet-2.png" alt="" class="md:hidden">
          </div>
        </div>
        <div class="header-img">
          <img src="/images/astro-lg.png" alt="Header Astro">
          <!-- <picture>
            <source media="(min-width: 1024px)" srcset="/images/astro-lg.png">
            <img src="/images/astro-md.png" alt="Header Astro">
          </picture> -->
        </div>
      </div>
      <div class="scroll-down mt-20">
        <a href="#about" class="flex flex-col items-center justify-center animate-pulse">
          <p class="mb-3">Keep Scrolling</p>
          <fa :icon="['fas','arrow-down']" size="2x" class=""/>
        </a>
      </div>
    </div>

    

    <div class="about" id="about">
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
            <a href="https://www.behance.net/gudofabi" target="_blank">
              <fa :icon="['fab', 'behance-square']" />
            </a>
          </li>
          <li class="mr-4">
            <a href="https://www.linkedin.com/in/gudofabi/" target="_blank">
              <fa :icon="['fab', 'linkedin']" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.ph/fabi_ape/_created/" target="_blank">
              <fa :icon="['fab', 'pinterest-square']" />
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import { reactive } from '@vue/reactivity'

export default {
  setup() {
    const siteData = reactive({
      title: `${import.meta.env.VITE_APP_TITLE}`,
      description: `Frontend developer, teacher, and web junkie.`,
      url: `${import.meta.env.VITE_APP_URL}`
    })

    useHead({
      meta: [
        {
          name: 'description',
          content: siteData.description
        },
        // Facebook
        {
          name: 'og:url',
          content: siteData.url
        },
        {
          name: 'og:type',
          content: 'website'
        },
        {
          name: 'og:title',
          content: `${import.meta.env.VITE_APP_TITLE} | Frontend Developer`,
        },
        {
          name: 'og:description',
          content: siteData.description
        },
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
.home {

  h3 {
    @apply font-holiday text-[28px] md:text-4xl mb-6 leading-[1.9];
  }
  .header {
    @apply h-[100vh] flex flex-col justify-center items-center;

    .header-container {
      @apply relative flex md:items-end md:justify-around 
      max-w-[320px] sm:max-w-[570px] md:max-w-[640px] xl:max-w-[920px] w-full mx-auto;

      .header-content {
        @apply relative w-[505px] h-[370px] flex flex-col justify-center;

        .yellow-brick {
          @apply absolute w-[172px] md:w-[161px] xl:w-[222px] h-full left-0 top-0 bg-gf-yellow -z-10;

        }
        .content {
          @apply max-w-[270px] md:max-w-[470px] w-full ml-11;

          h1 {
            @apply font-holiday text-black text-5xl md:text-[62px] xl:text-[96px] w-full mb-8 tracking-tight;
          }

          p {
            @apply leading-6 xl:leading-7 tracking-widest text-sm md:text-base;
          }

          img {
            @apply block sm:hidden absolute right-0;
          }

        }
      }

      .header-img {
        @apply hidden sm:block;

        img {
          @apply max-w-[308px] xl:max-w-full;

        }
      }
    }
  }

  .about {
    @apply relative flex flex-col-reverse lg:flex-row 
      max-w-[320px] md:max-w-[800px] xl:max-w-[900px] mx-auto 
      items-center xl:items-start justify-center xl:justify-between mb-36 pt-20;

    .about-bg-img {
      @apply w-full md:w-[unset] lg:-z-10 bottom-0 lg:left-[13%];
    }
    .about-balloon-img {
      @apply hidden md:block right-16 lg:right-8 -top-32 lg:-z-10;
    }

    .astro-img {
      @apply w-full md:w-1/2 z-10;

      img {
        @apply w-[90%] animate-bounce-slow;
      }

    }
    .about-content {
      @apply w-full md:w-[60%] lg:w-1/2;

      p {
        @apply text-black tracking-widest leading-7 mb-4 text-sm md:text-base;

        span {
          @apply text-gf-dark-yellow font-semibold;

        }
      }

      .qoute-message {
        @apply text-gray-500 italic pt-4 text-sm md:text-base;
      }

      .qoute-owner {
        @apply text-gray-600 font-semibold text-right text-sm md:text-base;
      }
    }

  }

  .services {
    @apply max-w-[900px] mx-auto mb-28;

    .services-container {
      @apply flex justify-center lg:justify-between flex-wrap items-center;
      .card {
        @apply flex items-center bg-white rounded-xl shadow-lg 
          hover:shadow-2xl border-2 border-transparent hover:border-gf-yellow py-5 px-9 transition-all
          first:mr-0 sm:first:mr-8 mb-8 last:m-0 lg:m-0 lg:first:m-0 cursor-pointer;

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
      @apply absolute max-w-[700px] md:w-full h-auto 
        md:mr-[-350px] md:ml-[-350px] md:right-1/2 md:left-1/2 -z-10 top-0 animate-spin-slow;
    }
    .content {
      @apply  mx-auto max-w-[522px] w-full text-center px-5 md:px-0;

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