<template>
    <div>
        <el-drawer title="" :visible.sync="drawer" :with-header="false" direction="ltr" size="200px">
            <el-menu style="height:100vh;" :default-active="0">
                <template v-for="(m, i) in menuItems">
                    <el-menu-item v-if="m.children.length==0">
                        <i class="el-icon-location"></i>
                        <nuxt-link :to="m.to">{{ m.title }}</nuxt-link>
                    </el-menu-item>

                    <el-submenu :key="i" :index="i" v-else>
                        <template #title>
                            <i class="el-icon-location"></i>
                            <nuxt-link :to="m.to">{{ m.title }}</nuxt-link>
                        </template>

                        <el-menu-item-group v-if="m.children.length">
                            <el-menu-item v-for="(mm, ii) in m.children" :key="ii" :index="`${i}-${ii}`">
                                <nuxt-link :to="mm.to">{{ mm.title }}</nuxt-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </template>
            </el-menu>
        </el-drawer>

        <div class="d-flex">
            <div class="d-none d-md-flex" style="min-width:200px; max-width:200px;">
                <el-menu style="width:100%; height:100vh;" :default-active="0">
                    <template v-for="(m, i) in menuItems">
                        <el-menu-item v-if="m.children.length==0">
                            <i class="el-icon-location"></i>
                            <nuxt-link :to="m.to">{{ m.title }}</nuxt-link>
                        </el-menu-item>

                        <el-submenu :key="i" :index="i" v-else>
                            <template #title>
                                <i class="el-icon-location"></i>
                                <nuxt-link :to="m.to">{{ m.title }}</nuxt-link>
                            </template>
    
                            <el-menu-item-group v-if="m.children.length">
                                <el-menu-item v-for="(mm, ii) in m.children" :key="ii" :index="`${i}-${ii}`">
                                    <nuxt-link :to="mm.to">{{ mm.title }}</nuxt-link>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </template>
                </el-menu>
            </div>

            <div class="flex-grow-1" style="hei8ght:100vh; overflow:auto;">
                <div class="bg-light p-2 d-flex align-items-center">
                    <div class="d-md-none">
                        <a href="javascript:;" class="btn" @click="drawer=true">
                            <i class="fas fa-bars"></i>
                        </a>
                    </div>

                    <div class="flex-grow-1"></div>

                    <div>
                        <el-dropdown>
                            <div>{{ $store.state.auth.user.name }}</div>

                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="(m, i) in userItems" :key="i">
                                    <nuxt-link :to="m.to">{{ m.title }}</nuxt-link>
                                </el-dropdown-item>
                                <el-dropdown-item divided>
                                    Sair
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>

                <div class="p-2">
                    <nuxt></nuxt>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            menuItems: [
                {title:"Dashboard", to:"/admin", children:[]},
                {title:"Configurações", to:"/admin/settings", children:[
                    {title:"Gerais", to:"/admin/settings"},
                    {title:"E-mail", to:"/admin/settings/email"},
                ]},
            ],

            userItems: [
                {title:"Meus dados", to:"/admin/me"},
            ],
        };
    },
}
</script>