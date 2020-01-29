import Vue from 'vue';
import App from './App';
import router from './router';
import './style.css';

import firebase from 'firebase';
require('firebase/firestore');

const config = {
  apiKey: "AIzaSyDUNJY2rlk3syizg27fDNw6l01QymS3AVI",
  authDomain: "system-builder-3b481.firebaseapp.com",
  databaseURL: "https://system-builder-3b481.firebaseio.com",
  projectId: "system-builder-3b481",
  storageBucket: "system-builder-3b481.appspot.com",
  messagingSenderId: "171211031590",
  appId: "1:171211031590:web:0e8d4f8d056b671bc392e7",
  measurementId: "G-PKGENZ89HW"
};

firebase.initializeApp(config);

Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});