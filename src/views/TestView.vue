<template>
   <v-container fill-height fluid id="test">
    <v-layout row wrap justify-center align-center>
        <v-flex></v-flex>
        <v-flex>
            <v-card width="300">
                <v-card-title>
                    test
                </v-card-title>
                <v-form class="px-3">
                    <v-text-field label="username"></v-text-field>
                    <v-text-field label="password" type="password"></v-text-field>
                </v-form>
                <v-footer>
                    <nav>
                        <router-link to="/">login</router-link>
                        <router-link to="/register">register</router-link>
                      </nav>
                </v-footer>
            </v-card>
        </v-flex>
    </v-layout>
   </v-container>
</template>

<style scoped>
    #test {
        justify-items: center;
    }
</style>