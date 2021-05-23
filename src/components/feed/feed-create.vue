<template>
  <form @submit.prevent="onSubmit" class="feed-create clearfix">
    <textarea
      ref="textarea"
      class="feed-create__content"
      placeholder="О чем вы думаете"
      v-model="message"
      :class="{ 'feed-create__content--filled': message }"
      @keypress.enter.prevent.exact="onSubmit"
    ></textarea>
    <button
      class="feed-create__share btn"
      :disabled="!message || isLoading"
      :class="{ 'btn--loading': isLoading }"
    >
      Поделиться
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import authors from "./authors";

import { getDate, textGenerator } from "../../helper";

export default {
  name: "feed-create",

  data() {
    return {
      message: "",
      isLoading: false,
    };
  },

  methods: {
    ...mapActions(["createMessage", "createComment"]),

    onSubmit() {
      if (this.isLoading) return;
      this.isLoading = true;

      const id = Math.floor(Math.random() * 1000000);
      const item = {
        id,
        date: getDate(),
        author: authors[Math.floor(Math.random() * 6)],
        message: this.message,
        comments: [],
      };

      this.createMessage(item)
        .then(() => {
          this.message = "";
          this.$refs["textarea"].blur();
          this.setCommentGenerator(item.id);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    // фукнция для добавления комметариев раз в 5-30 секунд.
    setCommentGenerator(messageId) {
      const innerAdd = this.createComment;
      Promise.resolve().then(function resolver() {
        return new Promise((resolve) => {
          const random = 5 + Math.floor(Math.random() * 26);
          setTimeout(() => {
            resolve();
          }, random * 1000);
        })
          .then(() => {
            const id = Math.floor(Math.random() * 1000000);
            const comment = {
              id,
              author: authors[Math.floor(Math.random() * 6)],
              message: textGenerator() || "Генератор сломался",
            };
            innerAdd({ messageId, comment });
          })
          .then(resolver);
      });
    },
  },
};
</script>
