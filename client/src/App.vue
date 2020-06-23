<template>
  <div id="app">
    <div class="container">
      <TheTable />
    </div>
    <TheLocaleChanger />
  </div>
</template>

<script>
import TheTable from '@/components/TheTable'
import TheLocaleChanger from '@/components/TheLocaleChanger'
export default {
  name: 'App',
  components: {
    TheTable, TheLocaleChanger
  }
}
</script>

<style lang="scss">
:root {
  --black: #222222;
  --white: #fff;
  --blue: #4EA5D9;
  --orange: #EB6534;
  --secondary-orange: #FDF1ED;
  --green: #639FAB;
  --light: #BBCDE5;
  --greyer: #3D3D3D;
  --grey: #8F8F8F;
}
$table-color: var(--greyer);
$table-cell-heading-color: var(--white) !important;
$table-cell-padding: 1rem 1.5rem;
$table-head-background-color: var(--orange);
$table-row-hover-background-color: var(--secondary-orange);
$table-cell-border-width: 0;
$table-head-cell-border-width: 0;
$input-radius: 0;
$input-color: var(--grey);
$input-background-color: var(--white);
$input-border-color: var(--grey);
$input-focus-border-color: var(--greyer);
$input-focus-box-shadow-color: none;
$input-icon-color: var(--grey);
$input-icon-active-color: var(--greyer);
$input-arrow: var(--grey);
@import "../node_modules/bulma/bulma";
@import url('https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

*:focus {
  outline: none;
}

.is-fullwidth {
  width: 100%;
}

input:focus {
  color: var(--greyer);
}

</style>
