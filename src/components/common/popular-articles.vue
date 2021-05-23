<template>
  <div class="popular-articles" v-if="popularLength">
    <h2 class="popular-articles__title">Самые часто обсуждаемые посты</h2>
    <div class="popular-articles__list">
      <popular-articles-item
        class="popular-articles__popular-articles-item"
        v-for="article in getPopularArticles"
        :article="article"
        :key="article.id"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import PopularArticlesItem from "./popular-articles-item";

export default {
  name: "popular-articles",
  components: {
    PopularArticlesItem,
  },

  computed: {
    ...mapGetters(["getPopularArticles"]),

    popularLength() {
      return this.getPopularArticles?.length;
    },
  },
};
</script>
