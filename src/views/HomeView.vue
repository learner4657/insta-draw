<template>
  <v-container fill-height>
    <v-row align-center justify="center">
      <v-col cols="12" sm="4">
        <v-card class="justify-center" width="450">
          <v-card-title>Login</v-card-title>
          <v-form class="px-3">
            <v-text-field v-model="username" label="username"></v-text-field>
            <v-text-field v-model="email" label="email"></v-text-field>
            <v-btn
              @click="submit"
            >
              submit
            </v-btn>
            <v-btn
              @click="reset"
            >
              reset
            </v-btn>
          </v-form>
          <v-footer>
              <nav>
                  <router-link to="/">login</router-link>
                  <router-link to="/register">register</router-link>
                </nav>
          </v-footer>
        </v-card>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
import userApi from '../api/userApi';

export default {
  name: 'HomeView',
  data () {
    return {
      username: '',
      email: '',
    }
  },
  methods: {
    submit() {
      userApi.register(this.username, this.email);
    }
  }

}
</script>

<style scoped>
  .v-btn {
    margin: 2vw;
  }
</style>
