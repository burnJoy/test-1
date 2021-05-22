<template>
  <div class="feed-list">
    <feed-item v-for="item in messages" :item="item" :key="item.id" />
    <div v-if="!messages.length && !isLoading">Расскажи что у тебя нового</div>
    <loader-item class="feed-list__loader" v-if="isLoading" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import FeedItem from "./feed-item";
import LoaderItem from "../common/loader-item";

export default {
  name: "feed-list",

  components: {
    FeedItem,
    LoaderItem,
  },

  computed: {
    ...mapState(["messages", "isLoading"]),
  },
};
</script>
