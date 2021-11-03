<template>
    <div class="ui-content">
        <div class="d-flex">
            <div class="flex-grow-1">
                <template v-for="e in propsValue.elements">
                    <div v-for="ee in elements" v-if="ee.element==e.element" @click="elementEditor(e)">
                        <component :is="ee.render" v-bind.sync="e.bind"></component>
                    </div>
                </template>
            </div>

            <!-- Editor -->
            <div class="bg-white shadow px-2 pb-3 ms-2" style="min-width:250px; max-width:250px;">
                <el-tabs v-model="editorTab">
                    <el-tab-pane label="Elementos" name="elements">
                        <div class="list-group">
                            <div class="list-group-item" v-for="e in elements">
                                <a href="javascript:;" @click="elementAdd(e)">{{ e.name }}</a>
                            </div>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="Elemento" name="element" v-if="elementEdit">
                        <div v-for="ee in elements" v-if="ee.element==elementEdit.element">
                            <component :is="ee.editor" v-bind.sync="elementEdit.bind"></component>
                        </div>

                        <button type="button" class="btn btn-primary w-100 mt-3" @click="elementEdit=false; emitValue();">
                            Ok
                        </button>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        edit: Boolean,
        value: Object,
    },

    watch: {
        value: {deep:true, handler(value) {
            this.propsValue = JSON.parse(JSON.stringify(value || {}));
            this.valueFix();
        }},
    },

    data() {
        return {
            propsValue: JSON.parse(JSON.stringify(this.$props.value || {})),
            editorTab: "elements",
            elementEdit: false,
            elements: [
                {
                    element: "html",
                    name: "Html",
                    bind: {
                        html: "",
                    },
                    editor: require('@/components/ui-content/element/html/editor').default,
                    render: require('@/components/ui-content/element/html/render').default,
                },
                {
                    element: "Price",
                    name: "price",
                    bind: {
                        prices: [],
                    },
                    editor: require('@/components/ui-content/element/price/editor').default,
                    render: require('@/components/ui-content/element/price/render').default,
                },
            ],
        };
    },

    methods: {
        uuid(prefix) {
            return (prefix? (prefix+'-'): '') + ([1e7] + -1e3).replace(/[018]/g, c => {
                return (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4))) ).toString(16);
            });
        },

        emitValue() {
            this.$emit('input', this.propsValue);
            this.$emit('value', this.propsValue);
            this.$emit('change', this.propsValue);
        },

        valueFix() {
            this.propsValue = {
                elements: [],
                ...this.propsValue
            };

            this.propsValue.elements = this.propsValue.elements.map(element => {
                element = {
                    _id: this.uuid('element'),
                    ...element
                };

                return element;
            });
        },

        elementAdd(element) {
            this.propsValue.elements.push({
                element: element.element,
                bind: JSON.parse(JSON.stringify(element.bind)),
            });
            this.valueFix();
            this.emitValue();
        },

        elementEditor(element) {
            this.elementEdit = element;
            this.editorTab = "element";
        }
    },

    mounted() {
        this.valueFix();
    },
}
</script>