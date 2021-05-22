<template>
  <div class="feed-comment clearfix">
    <div class="feed-comment__person">
      <img
        :src="comment.author.avatar"
        :alt="comment.author.name"
        width="70"
        height="70"
        class="feed-comment__avatar"
        :id="`unic-id-${uuid}`"
      />
    </div>
    <div class="feed-comment__message">
      {{ comment.message }}
    </div>
    <b-tooltip :target="`unic-id-${uuid}`" :title="comment.author.name" />
  </div>
</template>

<script>
import { BTooltip } from "bootstrap-vue";

export default {
  name: "feed-comment",

  components: {
    BTooltip,
  },

  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>
