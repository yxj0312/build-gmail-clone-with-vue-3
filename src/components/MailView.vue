<template>
    <div v-if="email">
        {{ email.subject }}
    </div>
</template>

<script>
export default{
 props:{
     email: {
         type:Object,
         required: true
     } 
 }   
}
</script>
