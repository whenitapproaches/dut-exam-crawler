<template>
	<div :class="`VueTables VueTables--${props.source}`" slot-scope="props">
		<div class="columns mb-5">
      <div class="column is-2">
        <img src="@/assets/logo.png" style="width: 100%" alt="">
      </div>
			<div class="column is-8 is-offset-2">
				<div class="columns">
					<div class="column pr-5">
						<div
							v-if="!props.opts.filterByColumn && props.opts.filterable"
							:class="`${props.theme.field} VueTables__search`"
						>
							<vnodes :vnodes="props.slots.beforeFilter" />
							<vt-generic-filter />
							<vnodes :vnodes="props.slots.afterFilter" />
						</div>
					</div>
					<div class="column is-narrow">
						<div v-if="props.perPageValues.length > 1" :class="`${props.theme.field} VueTables__limit`">
							<vnodes :vnodes="props.slots.beforeLimit" />
							<vt-per-page-selector />
							<vnodes :vnodes="props.slots.afterLimit" />
						</div>
					</div>
				</div>
				<vnodes :vnodes="props.slots.afterFilterWrapper" />

				<div
					class="VueTables__pagination-wrapper"
					v-if="props.opts.pagination.dropdown && props.totalPages > 1"
				>
					<div
						:class="`${props.theme.field} ${props.theme.inline} ${props.theme.right} VueTables__dropdown-pagination`"
					>
						<vt-dropdown-pagination />
					</div>
				</div>

				<div
					v-if="props.opts.columnsDropdown"
					:class="`VueTables__columns-dropdown-wrapper ${props.theme.right} ${props.theme.dropdown.container}`"
				>
					<vt-columns-dropdown />
				</div>
			</div>
		</div>

		<vnodes :vnodes="props.slots.beforeTable" />
		<div class="table-container is-fullwidth">
			<vt-table ref="vt_table" />
		</div>
		<vnodes :vnodes="props.slots.afterTable" />

		<vt-pagination />
	</div>
</template>

<script>
import VtColumnsDropdown from "vue-tables-2/compiled/components/VtColumnsDropdown"
import VtDropdownPagination from "vue-tables-2/compiled/components/VtDropdownPagination"
import VtGenericFilter from "vue-tables-2/compiled/components/VtGenericFilter"
import VtPerPageSelector from "vue-tables-2/compiled/components/VtPerPageSelector"
import VtPagination from "vue-tables-2/compiled/components/VtPagination"
import VtTable from "vue-tables-2/compiled/components/VtTable"
export default {
	name: "CustomTable",
	props: ["props"],
	components: {
		VtGenericFilter,
		VtPerPageSelector,
		VtColumnsDropdown,
		VtDropdownPagination,
		VtTable,
		VtPagination,
		vnodes: {
			functional: true,
			render: (h, ctx) => ctx.props.vnodes
		}
	}
}
</script>