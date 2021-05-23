<template>
  <div class="popular-articles-item clearfix">
    <div class="popular-articles-item__comments-quantity">
      {{ commentsLength }}
    </div>
    <div class="popular-articles-item__short">
      {{ shortMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "popular-articles-item",

  props: {
    article: {
      type: Object,
      required: true,
    },
  },

  computed: {
    commentsLength() {
      return this.article?.comments?.length;
    },

    shortMessage() {
      return this.clearedMessageFromImg.split(" ").slice(0, 15).join(" ");
    },

    clearedMessageFromImg() {
      return (
        this.article.message.replace(/(https?:\/\/.*\.(?:png|jpg))/i, "") ||
        "<img>"
      );
    },
  },
};
</script>
