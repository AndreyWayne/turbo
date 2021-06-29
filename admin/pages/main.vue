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
            <v-toolbar-title v-text="'Главная и контакты'" />
        </v-app-bar>

        <v-form 
            ref="form"
            v-model="valid"
            max-width="500"
        >
            Главный блок

            <v-text-field
                v-model="head1"
                label="Заголовок (1 слово)"
                required
                :rules="rule"
            ></v-text-field>

            <v-text-field
                v-model="head2"
                label="Заголовок (2 слово)"
                required
                :rules="rule"
            ></v-text-field>

            <v-textarea
                v-model="description"
                label="Описание под заголовком"
                rows="2"
                required
                :rules="rule"
                class="mb-12"
            ></v-textarea>

            Блок (что мы делаем)

            <v-textarea
                v-model="do_description"
                label="Описание"
                rows="2"
                required
                :rules="rule"
                class="mb-12"
            ></v-textarea>

            Блок (который вводит на страницу пример работ)

            <v-text-field
                v-model="work_head"
                label="Заголовок"
                required
                :rules="rule"
            ></v-text-field>

            <v-text-field
                v-model="work_description"
                label="Описание"
                required
                :rules="rule"
                class="mb-12"
            ></v-text-field>

            Блок контакты

            <v-text-field
                v-model="contacts_time1"
                label="Время (будние дни)"
                required
                :rules="rule"
            ></v-text-field>

            <v-text-field
                v-model="contacts_time2"
                label="Время (выходные дни)"
                required
                :rules="rule"
            ></v-text-field>

            <v-text-field
                v-model="phone"
                label="Телефон"
                required
                :rules="rule"
            ></v-text-field>

            <v-text-field
                v-model="address"
                label="Адрес"
                required
                :rules="rule"
            ></v-text-field>

            <v-text-field
                v-model="email"
                label="Email"
                required
                :rules="rule"
            ></v-text-field>

            <v-text-field
                v-model="vk"
                label="Ссылка на vk"
                required
                :rules="rule"
            ></v-text-field>

            <v-text-field
                v-model="inst"
                label="Ссылка на instagram"
                required
                :rules="rule"
            ></v-text-field>

            <v-btn color="primary" @click="update">
                Сохранить
            </v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    async asyncData({$axios}) {
        const result = await $axios.$get(`${process.env.baseUrl}main`);

        return {
            result,
            snackbar: false,
            head1: result.head1,
            head2: result.head2,
            description: result.description,
            do_description: result.do_description,
            work_head: result.work_head,
            work_description: result.work_description,
            contacts_time1: result.contacts_time1,
            contacts_time2: result.contacts_time2,
            phone: result.phone,
            email: result.email,
            address: result.address,
            vk: result.vk,
            inst: result.inst,
            valid: true,
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

            console.log(this.valid)

            const result = await this.$axios.$put(`${process.env.baseUrl}main`, {
                head1: this.head1,
                head2: this.head2,
                description: this.description,
                do_description: this.do_description,
                work_head: this.work_head,
                work_description: this.work_description,
                contacts_time1: this.contacts_time1,
                contacts_time2: this.contacts_time2,
                phone: this.phone,
                email: this.email,
                address: this.address,
                vk: this.vk,
                inst: this.inst,
            });

            console.log(result)

            this.snackbar = true;
        }
    }
}
</script>

<style>
form {
    max-width: 600px;
}
</style>