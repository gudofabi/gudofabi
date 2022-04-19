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
    <div class="scroll-down my-20">
      <a href="" class="flex flex-col items-center justify-center">
        <p>Keep Scrolling</p>
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
        <p class="about-p">2016 I started my journey as a web developer, I started as a layout designer. But designing is not enough, That's why I teach myself how to code to give life to my designs.</p>
        <p class="about-p">I've been into sorts of projects, That helped me improve my skills. And I lead projects too, a few times.</p>
        <p class="qoute-message">“If a potato can become vodka, you can become a Web Developer.”</p>
        <p class="qoute-owner">-anonymous</p>
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
    @apply relative flex max-w-[900px] mx-auto items-start justify-between;

    .about-bg-img {

    }
    .about-balloon-img {
      @apply right-0 top-0 -z-10;
    }



  }
}
</style>