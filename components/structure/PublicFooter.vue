<template>
  <v-footer absolute app color="white" class="px-6 py-2">
    <span class="mr-2">
      &copy; {{ new Date().getFullYear() }}
      - Patrícia Moreno Ribeiro |
    </span>

    <v-btn x-small icon color="primary" href="https://github.com/pm-ribeiro">
      <v-icon>mdi-github</v-icon>
    </v-btn>

    <v-btn
      x-small
      icon
      color="primary"
      href="https://github.com/pm-ribeiro"
      class="mx-2"
    >
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>

    <v-spacer></v-spacer>
    <v-btn
      text
      color="primary"
      icon
      small
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
    >
      <v-icon>
        {{ $vuetify.theme.dark ? 'mdi-brightness-2' : 'mdi-brightness-7' }}
      </v-icon>
    </v-btn>
  </v-footer>
</template>
