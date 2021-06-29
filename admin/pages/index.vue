<template>
    <div>
        <v-app-bar
            fixed
            app
        >
            <v-toolbar-title v-text="'Примеры работ'" />

            <v-spacer></v-spacer>

            <v-dialog
                v-model="dialog"
                max-width="600px"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon @click="openAdd">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="text-h5">{{ state === 'add' ? 'Добавить' : 'Изменить' }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-form
                            ref="form"
                            v-model="valid"
                        >
                            <v-text-field
                                v-model="name"
                                label="Название*"
                                required
                                :rules="rule"
                            ></v-text-field>

                            <v-text-field
                                v-model="description"
                                label="Описание*"
                                required
                                :rules="rule"
                            ></v-text-field>

                            <v-text-field
                                v-model="image"
                                label="Ссылка на изображение*"
                                required
                                persistent-hint
                                hint="Изображение должно быть ссылкой из вк или с других источников"
                                :rules="rule"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn v-if="state === 'add'" color="primary" @click="add">Добавить</v-btn>
                        <v-btn v-else color="primary" @click="update">Изменить</v-btn> 
                        <v-btn text @click="dialog = false">Отменить</v-btn> 
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-app-bar>

        <v-row>
            <v-col
                v-for="item in items"
                :key="item.id"
                class="d-flex child-flex"
                cols="4"
            >
                <v-card>
                    <v-img
                        :src="item.image"
                        class="grey lighten-2"
                    >
                    </v-img>

                    <v-card-title>
                        {{ item.name }}
                    </v-card-title>

                    <v-card-text>
                        {{ item.description }}
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn color="primary" @click="openUpdate(item)">
                            Изменить
                        </v-btn>

                        <v-btn text @click="deleteItem(item)">
                            Удалить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    async asyncData({$axios}) {
        const items = await $axios.$get(`${process.env.baseUrl}works`);

        return {
            state: null,
            id: null,
            items,
            dialog: false,
            name: '',
            description: '',
            image: '',
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
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.resetValidation();
        },
        async getList() {
            this.items = await this.$axios.$get(`${process.env.baseUrl}works`);
        },
        openAdd() {
            this.valid = true;
            this.state = 'add';
            this.name = '';
            this.description = '';
            this.image = '';
            this.id = null;

            this.dialog = true;
            
            setTimeout(() => { this.reset();})
        },
        openUpdate(item) {
            this.state = 'edit';
            this.id = item.id;
            this.name = item.name;
            this.description = item.description;
            this.image = item.image;

            this.dialog = true;

            setTimeout(() => { this.reset();})
        },
        async add() {
            this.validate();

            if (!this.valid) {
                return;
            }

            await this.$axios.$post(`${process.env.baseUrl}works`, {
                name: this.name,
                description: this.description,
                image: this.image,
            });

            await this.getList();

            this.dialog = false;
        },
        async update() {
            this.validate();

            if (!this.valid) {
                return;
            }

            await this.$axios.$put(`${process.env.baseUrl}works/${this.id}`, {
                name: this.name,
                description: this.description,
                image: this.image,
            });

            await this.getList();

            this.dialog = false;
        },
        async deleteItem(item) {
            await this.$axios.$delete(`${process.env.baseUrl}works/${item.id}`);

            await this.getList();
        }
    }
}
</script>

<style>
.v-card {
    display: flex;
    flex-direction: column;
}
.v-card__text {
    white-space: pre-line;
}
</style>