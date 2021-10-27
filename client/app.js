// require('dotenv').config();

import Vue from 'vue';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';

Vue.use(Element, { locale });

// https://axios.nuxtjs.org/
export default function (nuxt) {
    nuxt.$axios.onRequest((config) => {

        // config.headers.common['Content-Type'] = 'application/json,text/html';
        // config.headers.common['Content-Type'] = 'application/json';
        // config.headers.common['Accept'] = 'application/json';
        // config.headers.common['Access-Control-Allow-Credentials'] = 'true';
        // config.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // config.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, PUT, DELETE';
        // config.headers.common['Access-Control-Expose-Headers'] = 'Access-Control-*';
        // config.headers.common['Access-Control-Allow-Headers'] = 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept';
        
        // config.headers.common['Access-Control-Allow-Origin'] = '*';
        // config.headers.common['Access-Control-Allow-Origin'] = (new URL(location.href)).origin;

        // config.credentials = false;
        // config.proxyHeaders = false;
        config.proxy = true;
        // config.withCredentials = true;

        // if (config.url[0]=='/' && nuxt.isDev && nuxt.env.APP_URL) {
        //     config.baseURL = nuxt.env.APP_URL;
        // }

        // console.log(config);
        return config;
    });
};