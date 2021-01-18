<!--we'll make a new component, and try to reuse it there is two way to nest a component 
First, Globally
Second, Locally
-->
<template>
<!-- remember only one root allowed! -->
    <div> 
        <h1>List of ninjas</h1>
        <ul>
            <li v-for="ninja in ninjas">{{ninja}}</li>
        </ul>
    </div>
</template>


<script>
export default {
    data(){
        return {
            ninjas: ['Yoshi','Mario','Ryu']
        }
    }
}
</script>

<!-- and this will make the h1 element colored green, 
but it will override the purple colored h1 on App.vue 
you can check it on the Inspect Element on your web browsers-->
<!-- by using scoped, you will make VueJs generate css id's for every element of the component, so it won't overriding each other-->
<style scoped>
    h1{
      color:green
    }
</style>