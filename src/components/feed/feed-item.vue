<template>
  <article class="feed-page__feed-item feed-item">
    <div class="feed-item__wrapper clearfix">
      <div class="feed-item__person">
        <img
          width="100"
          height="100"
          class="feed-item__avatar"
          alt="name"
          :src="item.author.avatar"
        />
        <span class="feed-item__name">{{ item.author.name }}</span>
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
        {{ clearedMessageFromImg }}
        <div class="feed-item__date">{{ item.date }}</div>
      </div>
    </div>
    <div v-if="commentsLength" class="feed-item__comments">
      <feed-comment
        v-for="comment in commentsList"
        :comment="comment"
        :key="comment.id"
        class="feed-item__feed-comment"
      />
    </div>
  </article>
</template>

<script>
import FeedComment from "./feed-comment";

export default {
  name: "feed-item",
  components: {
    FeedComment,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    clearedMessageFromImg() {
      return this.item.message.replace(/(https?:\/\/.*\.(?:png|jpg))/i, "");
    },

    getImg() {
      return this.item.message.match(/(https?:\/\/.*\.(?:png|jpg))/i)?.[0];
    },

    commentsLength() {
      return this.item.comments?.length;
    },

    commentsList() {
      return this.item.comments.slice(-3);
    },
  },
};
</script>
