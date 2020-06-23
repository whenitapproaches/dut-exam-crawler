<template>
	<paginate
		@paginate="page => props.setPage(page)"
    :pageCount="pages"
    :page-range="3"
    prev-text="<"
    next-text=">"
    container-class="pagination-list mt-5"
    active-class="is-active"
    disabled-class="is-disabled"
    :click-handler="page => props.setPage(page)"
    :first-last-button="false"
	/>
</template>

<script>
import Paginate from "vuejs-paginate"
export default {
	name: "CustomPagination",
  props: ["props"],
  components: {
    Paginate
  },
  computed: {
    pages() {
      return Math.ceil(this.props.records/this.props.perPage)
    }
  },
	mounted() {
		console.log(this.props.perPage)
	}
}
</script>

<style lang="scss">
.pagination-list {
  margin-top: 1.5rem;
  justify-content: center;
  li {
    padding: 0.5rem 1.25rem;
    &.is-active {
      background-color: var(--orange);
      a {
        color: var(--white);
        &:hover {
          color: var(--white);
        }
      }
    }
    a {
      &:hover {
        color: var(--black);
      }
      color: var(--grey);
      font-size: 1.25rem;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>