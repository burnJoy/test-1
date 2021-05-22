<template>
  <div class="main" :class="{ 'main--dark': isDark }">
    <div class="main__container container">
      <themes-changer class="main__themes-changer" />
      <div class="main__wrapper clearfix">
        <!-- ******** begin feed-page ******** -->
        <section class="main__feed-page feed-page">
          <feed-create class="feed-page__create" />

          <feed-list class="feed-page__feed-list" />
        </section>
        <!-- ******** end feed-page ******** -->

        <!-- ******** begin aside ******** -->
        <aside class="main__aside aside">
          <popular-articles />
        </aside>
        <!-- ******** end aside ******** -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ThemesChanger from "@/components/common/themes-changer";
import FeedCreate from "@/components/feed/feed-create";
import FeedList from "@/components/feed/feed-list";
import PopularArticles from "@/components/common/popular-articles";

export default {
  name: "App",
  components: { ThemesChanger, FeedCreate, FeedList, PopularArticles },
  computed: {
    ...mapState(["isDark"]),
  },

  methods: {
    ...mapActions(["getLocalStoregaState"]),
  },

  created() {
    this.getLocalStoregaState();
  },
};
</script>
