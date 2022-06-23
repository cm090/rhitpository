window.addEventListener('load', (event) => {
    firebase.initializeApp({
        apiKey: "AIzaSyCyZsiiObxDGDhJwI5k1EK_zIzYZ3CUvag",
        authDomain: "rose-resources.firebaseapp.com",
        projectId: "rose-resources",
        storageBucket: "rose-resources.appspot.com",
        messagingSenderId: "99750303408",
        appId: "1:99750303408:web:9c43b9a201bff6c022cd75",
        measurementId: "G-KEXKBZYN6C"
    });
    firebase.auth().onAuthStateChanged((user) => {
        userCheck(user);
    });
});

function userCheck(user) {
    if (user == null) {
        if (window.location.pathname !== '/') {
            window.location.href = '/auth?redirect=' + window.location.href;
        } else {
            document.querySelector("div.notion-text.notion-block-c580a4e9d3b3424ca369f1655eaf837e > a").href = '/auth?redirect=https://files.rhit.cf/course-list';
        }
        document.querySelector("#__next > div > div.notion-frame > div > footer > div.styles_copyright__nhL_k").innerHTML = 'Copyright 2022 The Elephant\'s Onion';
    } else {
        try {
            document.querySelector("div.notion-text.notion-block-c580a4e9d3b3424ca369f1655eaf837e > a").href = '/course-list';
        } catch (e) { }
        document.querySelector("#__next > div > div.notion-frame > div > footer > div.styles_copyright__nhL_k").innerHTML = 'Copyright 2022 The Elephant\'s Onion<br><b><a href="#" onclick="firebase.auth().signOut();">Log out</a></b>';
    }
}