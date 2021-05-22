<template>
  <article class="feed-page__feed-item feed-item">
    <div class="feed-item__wrapper clearfix" >
      <div class="feed-item__person">
        <img
          width="99"
          height="99"
          class="feed-item__avatar"
          alt="name"
          :src="item.author.avatar"
          :id="`unic-id-${uuid}`"
        />
      </div>
      <div class="feed-item__message">
        <div class="feed-item__img-wrap">
          <img
            class="feed-item__img"
            v-if="getImg"
            :src="getImg"
            alt="some IMG"
          />
        </div>
        {{ clearMessageFromImg }}
        <div class="feed-item__date">{{ item.date }}</div>
      </div>
    </div>
    <div v-if="commentsLength()" class="feed-item__comments">
      <feed-comment
        v-for="comment in item.comments.slice(-3)"
        :comment="comment"
        :key="comment.id"
        class="feed-item__feed-comment"
      />
    </div>

    <b-tooltip :target="`unic-id-${uuid}`" :title="item.author.name"/>
  </article>
</template>

<script>
import { BTooltip } from "bootstrap-vue";

import FeedComment from "./feed-comment";

export default {
  name: "feed-item",
  components: {
    FeedComment,
    BTooltip
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    clearMessageFromImg() {
      return this.item.message.replace(/(https?:\/\/.*\.(?:png|jpg))/i, "");
    },

    getImg() {
      return this.item.message.match(/(https?:\/\/.*\.(?:png|jpg))/i)?.[0];
    },
  },

  methods: {
    // IE 10 не перестает удивлять
    commentsLength() {
      return this.item.comments?.length;
    },
  },
};
</script>
