<template>
	<v-client-table :columns="columns" v-model="data" :options="options"></v-client-table>
</template>

<script>
import Axios from "axios"
import moment from "moment"
const timeRelative = {
	"2c1": "7:00 - 9:00",
	"2c2": "9:00 - 11:00",
	"3c1": "7:00 - 8:15",
	"3c2": "8:15 - 9:30",
	"3c3": "9:30 - 11:00",
	"2c3": "13:00 - 15:00",
	"2c4": "15:00 - 16:30",
	"3c4": "13:00 - 14:15",
	"3c5": "14:15 - 15:30",
	"3c6": "15:30 - 16:30",
	"1c1": "7:00 - 17:30",
	"1c2": "17:30 - 20:30"
}
function change_alias(alias) {
	var str = alias
	str = str.toLowerCase()
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i")
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
	str = str.replace(/đ/g, "d")
	str = str.replace(
		/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
		" "
	)
	str = str.replace(/ + /g, " ")
	str = str.trim()
	return str
}
export default {
	name: "TheTable",
	computed: {
		options() {
			return {
				filterAlgorithm: {
					// name(row, query) {
					//   if(query.includes("đồ án")) return row.name.includes("ĐA")
					// },
					name(row, query) {
						let reg = new RegExp(query, "i")
						let keywordReg = []
						let keyword = query.replace(/do\s?an|đồ\s?án/g, "ĐA")
						keyword = keyword.replace(/lap\s?trinh|lập\s?trình/g, "LT")
						keyword = keyword.replace(/xu\s?li|xu\s?ly|xử\s?lí|xử\s?lý/g, "XL")
						keyword = keyword.replace(
							/ki\s?thuat|ky\s?thuat|kỹ\s?thuật|kĩ\s?thuật/g,
							"KT"
						)
						keyword = keyword.replace(/chuyen\s?nghanh|chuyên\s?nghành/g, "CN")
						keywordReg = new RegExp(keyword, "g")
						return (
							change_alias(row.name).includes(query) ||
							reg.test(row.name) ||
							keywordReg.test(row.name)
						)
					},
					bla(row, query) {
						console.log(row, query)
					}
				},
				headings: {
					group: this.$t("module_code"),
					name: this.$t("module_name"),
					amount: this.$t("quantity"),
					date: this.$t("exam_date"),
					room: this.$t("room"),
					time: this.$t("time")
				},
				customSorting: {
					date: function(asc) {
						return function(a, b) {
							var lastA = moment(a.date, "DD/MM/YYYY")
							var lastB = moment(b.date, "DD/MM/YYYY")
							if (asc) return lastA.isBefore(lastB) ? -1 : 1
							return lastB.isBefore(lastA) ? -1 : 1
						}
					},
					name: function(asc) {
						return function(a, b) {
							var lastA = a.name
							var lastB = b.name
							if (asc) return lastA.localeCompare(lastB)
							return lastB.localeCompare(lastA)
						}
					}
				},
				perPageValues: [10, 20, 30, 50],
				resizableColumns: false,
				skin: "table is-hoverable is-fullwidth",
				columnsClasses: {
					group: "column-group",
					name: "column-name",
					time: "column-time"
				},
				sortIcon: {
					base: "fi is-size-7",
					up: "fi-caret-up",
					down: "fi-caret-down",
					is: ""
				},
				templates: {
					time: (h, row) => {
						let rangeTime = timeRelative[row.time.toLowerCase()]
						return `${row.time} (${rangeTime})`
					}
				}
			}
		}
	},
	data() {
		return {
			columns: ["group", "name", "amount", "date", "room", "time"],
			data: []
		}
	},
	created() {
		Axios.get("http://localhost:3000/api/").then(res => {
			this.data = res.data
		})
	}
}
</script>

<style lang="scss">
.table {
	.column-group {
		width: 15%;
	}
	.column-name {
		width: 35%;
		text-align: left;
	}
	.column-time {
		width: 20%;
	}
}
.VueTables__sortable {
	cursor: pointer;
}
</style>