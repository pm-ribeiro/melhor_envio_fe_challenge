<template>
  <div>
    <PublicFooter v-if="$route.path == '/'"></PublicFooter>
    <PrivateFooter v-else></PrivateFooter>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
