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

<style>
    h1{
      color:green
    }
</style>