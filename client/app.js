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


// https://validatejs.org/
import validate from 'validate.js';

Vue.prototype.$validator = function(rules) {
    return new (class {
        run = 0;
        error = {};
        errorReal = {};
        rules = {};
    
        constructor(rules) {
            validate.validators.presence.message = 'Campo obrigatório';
            validate.validators.email.message = 'E-mail inválido';
            validate.validators.equality.message = 'Não bate com a confirmação';
    
            this.rules = rules;
        }
        
        clear() {
            this.run = 0;
            this.error = {};
            this.errorReal = {};
        }
    
        validate(data, onlyField=null) {
            this.run++;

            for(let i in data) { if (! data[i]) delete data[i]; }
            let error = validate(data, this.rules) || {};

            this.error = Object.assign({}, error);
            this.errorReal = Object.assign({}, error);
    
            if (onlyField) {
                for(let i in this.error) {
                    if (i == onlyField) continue;
                    delete this.error[i];
                }
            }
        }
    
        valid() {
            if (this.run==0) return false;
            return Object.keys(this.errorReal).length==0;
        }
    
        invalid() {
            if (this.run==0) return true;
            return Object.keys(this.errorReal).length>0;
        }
    
        setError(errors) {
            this.clear();
            this.error = errors;
            this.errorReal = errors;
        }
    })(rules);
};