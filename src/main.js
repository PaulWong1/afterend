//1.1导入包
import Vue from 'vue';
// 2.1导入根组件
import AppComponent from './component/App.vue';

new Vue({
    el: '#app',
    render: c => c(AppComponent)
})