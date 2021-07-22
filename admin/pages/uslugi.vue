<template>
    <div>
        <v-app-bar
            fixed
            app
        >
            <v-toolbar-title v-text="'Услуги'" />

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
                        <span class="text-h5">Добавить услугу</span>
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
                                v-model="price"
                                label="Цена от*"
                                required
                                :rules="rule"
                            ></v-text-field>

                            <v-textarea
                                v-model="description"
                                label="Описание*"
                                required
                                rows="2"
                                :rules="rule"
                            ></v-textarea>

                            <v-text-field
                                v-model="image"
                                label="Ссылка на изображение*"
                                required
                                persistent-hint
                                hint="Изображение должно быть квадратной и хорошего качества, не менее 1240(ш) * 1240(в)"
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
                        height="270"
                        max-height="270"
                    >
                    </v-img>

                    <v-card-title>
                        {{ item.name }}
                    </v-card-title>

                    <v-card-subtitle>
                        от {{ item.price }} рублей
                    </v-card-subtitle>

                    <v-card-text>
                        {{ item.description }}
                    </v-card-text>

                    <v-spacer></v-spacer>

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
    middleware: 'auth',
    async asyncData({$axios}) {
        const items = await $axios.$get(`${process.env.baseUrl}uslugi`);

        return {
            state: null,
            id: null,
            items,
            dialog: false,
            name: '',
            price: '',
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
            this.items = await this.$axios.$get(`${process.env.baseUrl}uslugi`);
        },
        openAdd() {
            this.valid = true;
            this.state = 'add';
            this.name = '';
            this.price = '';
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
            this.price = item.price;
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

            await this.$axios.$post(`${process.env.baseUrl}uslugi`, {
                name: this.name,
                description: this.description,
                image: this.image,
                price: this.price,
            });

            await this.getList();

            this.dialog = false;
        },
        async update() {
            this.validate();

            if (!this.valid) {
                return;
            }

            await this.$axios.$put(`${process.env.baseUrl}uslugi/${this.id}`, {
                name: this.name,
                description: this.description,
                image: this.image,
                price: this.price,
            });

            await this.getList();

            this.dialog = false;
        },
        async deleteItem(item) {
            await this.$axios.$delete(`${process.env.baseUrl}uslugi/${item.id}`);

            await this.getList();
        }
    }
}
</script>

<style scoped>
.v-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
.v-card__text {
    white-space: pre-line;
}

@media (max-width: 767px) {
    .child-flex {
        max-width: 100% !important;
        flex: none;
    }
}
</style>