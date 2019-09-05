<style scoped lang="less">
    .index {
        img {
            width: 100%;
        }
    }
</style>
<template>
    <div class="index">
        <Carousel autoplay :autoplay-speed="autoplaySpeed" v-model="value2" loop>
            <CarouselItem>
                <img src="../images/1.jpg">
            </CarouselItem>
            <CarouselItem>
                <img src="../images/1.jpg">
            </CarouselItem>
            
        </Carousel>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        value2: 0,
        autoplaySpeed: 3000,
      }
    }
  }
</script>