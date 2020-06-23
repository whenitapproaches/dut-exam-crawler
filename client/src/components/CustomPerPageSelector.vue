<template>
	<div class="VueTables__limit-field">
		<div class="control has-icons-left">
			<div class="select">
				<select
					:id="props.selectAttrs.id"
					:value="props.selectAttrs.value"
					@change="props.selectEvents.change"
				>
					<option v-for="val in props.perPageValues" :key="val" :value="val">{{val}}</option>
				</select>
			</div>
			<span class="icon is-left">
				<i class="fi fi-filter"></i>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "CustomPerPageSelector",
	props: ["props"]
}
</script>