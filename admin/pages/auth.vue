<template lang="">
    <div>
        
    </div>
</template>

<script>
export default {
    middleware: 'noAuth',
    methods: {
      auth() {
        if (this.$cookies.get('token') === 'admin') {
          this.token = true;

          return;
        }
        
        const login = prompt('Введите логин');

        if (login != 'admin@admin.com') {
          alert('Неверный логин');

          this.auth();

          return;
        }

        const password = prompt('Введите пароль');

        if (password != 'ipadib339') {
          alert('Неверный пароль');

          this.auth();

          return;
        }

        this.$cookies.set('token', 'admin');
        
        setTimeout(() => {
            this.$router.replace({ path: '/' });
        }, 1000)
      }
    },
    mounted() {
      this.auth();
    }
}
</script>

<style>
    
</style>