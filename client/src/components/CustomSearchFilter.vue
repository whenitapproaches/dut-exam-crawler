<template>
	<div class="VueTables__search-field">
		<div class="control has-icons-left">
			<input
				:class="`VueTables__search__input ${props.theme.input}`"
				type="text"
				:placeholder="$t('search_input_placeholder') + '...'"
				@keyup="e=>props.search(props.opts.debounce)(e)"
				:id="`VueTables__search_${props.id}`"
				autocomplete="off"
			/>
			<span class="icon is-left">
				<i class="fi fi-search"></i>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "CustomSearchFilter",
	props: ["props"]
}
</script>