import Vue from "vue"
import App from "./App.vue"
import { ClientTable } from "vue-tables-2"
import CustomPagination from "@/components/CustomPagination"
import CustomPerPageSelector from "@/components/CustomPerPageSelector"
import CustomSearchFilter from "@/components/CustomSearchFilter"
import CustomTable from "@/components/CustomTable"
import i18n from '@/lang'

Vue.config.productionTip = false
Vue.use(ClientTable, {}, false, "bulma", {
  pagination: CustomPagination,
  dataTable: CustomTable,
  perPageSelector: CustomPerPageSelector,
  genericFilter: CustomSearchFilter
})

new Vue({
  render: (h) => h(App),
  i18n
}).$mount("#app")
