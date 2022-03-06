let vueApp = Vue.createApp({
    data() {
        return {
            showNav: false,
        };
    },
}).mount("#vue-app");

function showNavMenu() {
    vueApp.showNav = true;
}
