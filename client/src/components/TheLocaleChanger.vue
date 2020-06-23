<template>
	<div class="locale-changer">
		<ul>
			<li v-for="(lang, i) in langs" :key="`lang${i}`">
				<a href="#" @click.prevent="changeLocale(lang)">
          <img v-if="lang == 'en'" src="@/assets/en-icon.png">
          <img v-if="lang == 'vi'" src="@/assets/vi-icon.png">
        </a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "TheLocaleChanger",
	data() {
		return {
			langs: ["vi", "en"]
		}
	},
	methods: {
		changeLocale(lang) {
			this.$i18n.locale = lang
		}
	}
}
</script>

<style scoped lang="scss">
.locale-changer {
  position: fixed;
  bottom: 0;
  right: 0;
  ul {
    display: flex;
  }
  a {
    display: flex;
  }
}
</style>