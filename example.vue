<template>
  <div>
    <img :src="ogImageSrc" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    contentSlug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      ogImageSrc: '',
    };
  },
  async created() {
    this.ogImageSrc = `/og-images/${this.contentSlug}.png`;
  },
};
</script>
