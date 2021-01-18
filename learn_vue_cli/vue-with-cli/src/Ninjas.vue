<!--we'll make a new component, and try to reuse it there is two way to nest a component 
First, Globally
Second, Locally
-->
<template>
    <ul>
        <li v-for="ninja in ninjas">{{ninja}}</li>
    </ul>
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

</style>