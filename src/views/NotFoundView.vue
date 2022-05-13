<template>
    <div class="not-found">
        <div class="content-container">
            <h1 class="title">4 <img src="/images/astro-4.svg" alt=""> 4</h1>
            <h3>What on earth are you doing here?</h3>
            <p>Well, this is awkward, the page you were trying to view does not exist.</p>
            <router-link to="/" class="home-btn">
                <fa :icon="['fas','arrow-left']" class="mr-2" />
                Return Home
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.not-found {

    @apply h-[100vh] flex items-center justify-center;

    .content-container {
        @apply py-10 max-w-[320px] md:max-w-[550px] w-full mx-auto text-center flex flex-col items-center justify-center;

        .title {
            @apply flex justify-center items-center text-center 
               text-[100px] md:text-[200px] text-gf-yellow;

            img {
                @apply w-[100px] md:w-[142px] md:h-[218px] object-contain ml-3 animate-bounce-slow;
            }
        }

        h3 {
            @apply text-gf-yellow text-2xl md:text-[30px] font-normal tracking-wide mb-3;
        }

        p {
            @apply text-[#a5a5a5] text-xs md:text-base;
        }

        .home-btn {
            @apply bg-gf-yellow text-black py-3 px-8 rounded-full inline-block my-14;
        }
    }
}

</style>