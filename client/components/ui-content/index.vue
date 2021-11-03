<template>
    <div class="ui-content">
        <div class="d-flex">
            <div class="flex-grow-1">
                <template v-for="e in propsValue.elements">
                    <div v-for="ee in elements" v-if="ee.element==e.element" @click="elementEditor(e)" :class="{'ui-content-selected':(edit && elementEdit && elementEdit._id==e._id)}">
                        <component :is="ee.render" v-bind.sync="e.bind" :style="e.style"></component>
                    </div>
                </template>
            </div>

            <!-- Editor -->
            <div class="bg-white shadow px-2 pb-3 ms-2" style="min-width:250px; max-width:250px;">
                <el-tabs v-model="editorTab">
                    <el-tab-pane label="Templates" name="templates">
                        <div class="list-group">
                            <div class="list-group-item" v-for="e in elements">
                                <a href="javascript:;" class="d-flex align-items-center" @click="elementAdd(e)">
                                    <div class="flex-grow-1">
                                        <div>{{ e.name }}</div>
                                        <small class="d-block text-muted">{{ e.description }}</small>
                                    </div>
                                    <i class="fas fa-plus"></i>
                                </a>
                            </div>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="Elementos" name="elements">
                        <draggable v-model="propsValue.elements" v-bind="{handle:'.handle', animation:150}" @end="emitValue()">
                            <div v-for="item in propsValue.elements" :key="item.id" class="input-group mb-2">
                                <div class="input-group-text handle" style="cursor:pointer;">
                                    <i class="fas fa-bars"></i>
                                </div>
                                <input type="text" class="form-control" v-model="item.description">
                                <div class="input-group-text bg-danger border border-danger" style="cursor:pointer;">
                                    <a href="javascript:;" class="text-white" @click="elementRemove(item)">
                                        <i class="fas fa-times"></i>
                                    </a>
                                </div>

                                <!-- <div class="handle" style="cursor:pointer;"><i class="fas fa-bars"></i></div>
                                <div class="flex-grow-1 p-2">
                                    <input type="text" class="form-control border-0" v-model="item.description">
                                </div>
                                <div><a href="javascript:;" class="btn btn-sm btn-danger" @click="elementRemove(item)">
                                    <i class="fas fa-times"></i></a>
                                </div> -->
                            </div>
                        </draggable>
                    </el-tab-pane>

                    <el-tab-pane label="Elemento" name="element" v-if="elementEdit">
                        <div v-for="ee in elements" v-if="ee.element==elementEdit.element">
                            <component :is="ee.editor" v-bind.sync="elementEdit.bind"></component>
                            <!-- <ui-content-style v-model="elementEdit.style"></ui-content-style> -->
                        </div>

                        <button type="button" class="btn btn-primary w-100 mt-3" @click="elementEdit=false; emitValue();">
                            Ok
                        </button>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <pre class="m-0">propsValue: {{ propsValue }}</pre>
    </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
    components: { draggable },

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
            editorTab: "templates",
            elementEdit: false,
            elements: require('./element/index.js').default,
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
        },

        elementDefault(element={}) {
            let _id = this.uuid('element');

            return {
                _id,
                label: _id,
                element: false,
                bind: {},
                style: {},
                ...element
            };
        },

        elementAdd(element={}) {
            element = JSON.parse(JSON.stringify(element));
            delete element.render;
            delete element.editor;

            this.propsValue.elements.push({
                _id: this.uuid('element'),
                ...element
            });

            this.emitValue();
        },

        elementRemove() {},

        elementEditor(element) {
            this.elementEdit = element;
            this.editorTab = "element";
        },
    },

    mounted() {
        this.valueFix();
    },
}
</script>

<style>
.ui-content-selected {outline:dashed 1px red;}
</style>