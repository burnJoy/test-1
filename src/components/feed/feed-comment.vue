<template>
  <div class="feed-comment clearfix">
    <div class="feed-comment__person">
      <img
        :src="comment.author.avatar"
        :alt="comment.author.name"
        width="70"
        height="70"
        class="feed-comment__avatar"
      />
      <span class="feed-comment__name">{{ comment.author.name }}</span>
    </div>
    <div class="feed-comment__message">
      {{ comment.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "feed-comment",

  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>
