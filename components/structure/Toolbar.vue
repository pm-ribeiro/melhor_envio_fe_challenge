<template>
  <div>
    <PublicToolbar v-if="$route.path == '/'"></PublicToolbar>
    <PrivateToolbar v-else></PrivateToolbar>
  </div>
</template>
