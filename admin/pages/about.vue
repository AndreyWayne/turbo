<template>
    <div>
        <v-snackbar
            v-model="snackbar"
        >
            Изменено
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Убрать
                </v-btn>
            </template>
        </v-snackbar>

        <v-app-bar
            fixed
            app
        >
            <v-toolbar-title v-text="'О нас'" />
        </v-app-bar>

        <v-form 
            ref="form"
            v-model="valid"
        >

            <v-text-field
                v-model="name"
                label="Заголовок"
                required
                :rules="rule"
            ></v-text-field>

            <v-textarea
                v-model="description"
                label="Описание"
                rows="3"
                required
                :rules="rule"
            ></v-textarea>

            <v-btn color="primary" @click="update">
                Сохранить
            </v-btn>
        </v-form>

        <p class="mt-10">{{ info }}</p>

        <p>
            Например:
            <p>{{ example }}</p>
        </p>
    </div>
</template>

<script>
export default {
    async asyncData({$axios}) {
        const result = await $axios.$get(`${process.env.baseUrl}about`);

        return {
            info: `ПРАВИЛО ИЗМЕНЕНИЯ ОПИСАНИЯ: Обычный текст заворачивается в теги <p></p>, а текст с обводкой слева в тег с классом <p class="line"></p>.`,
            example: `
                <p>Занимаемся молярно-кузовным ремонтом автомобилей уже с 2007 года. За это время покрасили и восстановили более 2500 машин.</p>

                <p class="line">Мы официальные дилеры микс системы TURBO (HYMAX). На каждом этапе работы используем только заводские материалы: шпаклёвка, грунтовка, автоэмаль и лак. Поэтому отвечаем за качество покраски вашего автомобиля.</p>
            `,
            dialog: false,
            name: result.name,
            description: result.description,
            valid: true,
            result,
            snackbar: false,
        }
    },
    data() {
        return {
            rule: [
                v => !!v || 'Поле обязательно',
            ],
        }
    },
    methods: {
        validate () {
            this.$refs.form.validate();
        },
        async update() {
            this.validate();

            if (!this.valid) {
                return;
            }

            await this.$axios.$put(`${process.env.baseUrl}about`, {
                name: this.name,
                description: this.description,
            });

            this.snackbar = true;
        }
    },
}
</script>

<style scoped>
p {
    white-space: pre-line;
}
</style>