import { initializeApp } from "firebase/app";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

const firebaseConfig = {
  apiKey: "AIzaSyCOxUZNKEjbvUVvA5S-8Wr5mEvceOKDmXw",
  authDomain: "vue3-fireauth.firebaseapp.com",
  projectId: "vue3-fireauth",
  storageBucket: "vue3-fireauth.appspot.com",
  messagingSenderId: "95740567273",
  appId: "1:95740567273:web:a38f314481147206c39a78",
  measurementId: "G-NDKV6G1THQ",
};

initializeApp(firebaseConfig);
const app = createApp(App);
app.use(router);
app.mount("#app");
