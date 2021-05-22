<template>
  <div class="themes-changer">
    <label class="themes-changer__slide">
      <input
        class="themes-changer__input"
        :checked="isDark"
        @change="themeIsChanged"
        value="checked"
        type="checkbox"
      />
      <span class="themes-changer__point"></span>
    </label>
    {{ themeLabel }}
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["isDark"]),

    themeLabel() {
      return this.isDark ? "Темный режим" : "Светлый режим";
    },
  },

  methods: {
    ...mapActions(["changeTheme"]),

    themeIsChanged(evt) {
      this.changeTheme(evt.target.checked);
    },
  },
};
</script>
