<template>
    <b-jumbotron header-level="4" bg-variant="light" text-variant="dark" border-variant="dark">
      <template v-slot:header >{{message}}</template>
    </b-jumbotron>
</template>
<script>
export default {
    props:['message']
}
</script>