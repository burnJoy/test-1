<template>
  <div class="popular-articles" v-if="popularLength">
    <h2 class="popular-articles__title">Самые часто обсуждаемые посты</h2>
    <div class="popular-articles__list">
      <div
        class="popular-articles__popular-articles-item popular-articles-item clearfix"
        v-for="article in getPopularArticles"
        :key="article.id"
      >
        <div class="popular-articles-item__comments-quantity">
          {{ commentsLength(article) }}
        </div>
        <div class="popular-articles-item__short">
          {{ clearMessageFromImg(article).split(" ").slice(0, 15).join(" ") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "popular-articles",
  computed: {
    ...mapGetters(["getPopularArticles"]),

    // IE не перестает удивлять
    popularLength() {
      return this.getPopularArticles?.length;
    },
  },

  methods: {
    commentsLength(article) {
      return article?.comments?.length;
    },

    clearMessageFromImg(article) {
      return article.message.replace(/(https?:\/\/.*\.(?:png|jpg))/i, "") || '<img>';
    },
    
  },
};
</script>
