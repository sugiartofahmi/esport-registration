import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router/index";
import './index.css'
import Navbar from '../src/components/navbar/index.vue'
import Footer from '../src/components/footer/index.vue'
createApp(App).use(router).component("Navbar", Navbar).component("Footer", Footer).mount("#app");
