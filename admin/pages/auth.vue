<template>
    <div class="auth">
          <v-snackbar
            v-model="snackbar"
          >
          Администратор не существует

          <template v-slot:action="{ attrs }">
            <v-btn
              color="pink"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Закрыть
            </v-btn>
          </template>
        </v-snackbar>
         <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="send"
        >
            <v-text-field
                v-model="login"
                label="Логин"
                required
                :rules="rules"
            ></v-text-field>

            <v-text-field
                v-model="password"
                label="Пароль"
                required
                :rules="rules"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
            ></v-text-field>

            <v-btn color="primary" type="submit" class="mt-8" :loading="loading">
                Войти
            </v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    middleware: 'noAuth',

    layout: 'auth',

    data() {
        return {
            valid: false,
            login: '',
            password: '',
            loading: false,
            showPassword: false,
            snackbar: false,
            rules: [
                v => !!v || 'Поле обязательно',
            ],
        }
    },

    methods: {
        validate () {
            this.$refs.form.validate()
        },

        async auth() {
            this.loading = true;
            console.log(this.$cookies.get('token'))

            if (this.login === 'admin@admin.com' && this.password === 'ipadib339') {
              this.$cookies.set('token', 'admin');

              this.loading = true;

              this.$router.go(this.$router.currentRoute)

              return;
            }

            this.loading = false;

            this.snackbar = true;
        },
        async send() {
            await this.validate();

            if (!this.valid) {
                return;
            }

            await this.auth()
        }
    },
}
</script>

<style lang="scss">
.auth {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    form {
        width: 100%;
        max-width: 420px;
    }
}
</style>
