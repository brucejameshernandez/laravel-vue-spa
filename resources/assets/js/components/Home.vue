<template>
    <md-layout md-align="center">
        <span class="md-title">Home Page</span>
        <md-bottom-bar md-shift>
            <router-link v-bind:to="'/home'" class="md-bottom-bar-item" md-icon="photo">Home</router-link>
            <router-link v-bind:to="'/about'" class="md-bottom-bar-item" md-icon="photo">About</router-link>
            <router-link v-bind:to="'/'" class="md-bottom-bar-item" md-icon="photo">Logout</router-link>
        </md-bottom-bar>
        <md-boards :md-auto="true" :md-infinite="true" :md-duration="5000" :md-swipeable="true" style="text-align: center">
            <md-board id="slide1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            </md-board>

            <md-board id="slide2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            </md-board>

            <md-board id="slide3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            </md-board>
        </md-boards>
        <md-table md-sort="calories">
  <md-table-header>
    <md-table-row>
      <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>
      <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>
      <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>
      <md-table-head md-sort-by="carbs" md-numeric>Carbs (g)</md-table-head>
      <md-table-head md-sort-by="protein" md-numeric>Protein (g)</md-table-head>
    </md-table-row>
  </md-table-header>

  <md-table-body>
    <md-table-row v-for="(row, index) in 5" :key="index">
      <md-table-cell>Dessert Name</md-table-cell>
      <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
    </md-table-row>
  </md-table-body>
</md-table>
    </md-layout> 
</template>

<script>
export default {
  name: 'auth',
  data () {
    return {
     
    }
  },
  methods: {
    
  }
}
</script>