import FirebaseKeys from "./config";
import firebase from "firebase";
require("firebase/firestore");

class Fire {
    constructor() {
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyBzIzXkJzZ71yKvJxue5UXPwy-U5nk1kEI",
            authDomain: "chansse-dev.firebaseapp.com",
            databaseURL: "https://chansse-dev.firebaseio.com",
            projectId: "chansse-dev",
            storageBucket: "chansse-dev.appspot.com",
            messagingSenderId: "148559026980",
            appId: "1:148559026980:web:92b6657127750163d8f1b1"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    addPost = async ({ text, localUri }) => {
        const remoteUri = await this.uploadPhotoAsync(localUri, `photos/${this.uid}/${Date.now()}`);

        return new Promise((res, rej) => {
            this.firestore
                .collection("posts")
                .add({
                    text,
                    uid: this.uid,
                    timestamp: this.timestamp,
                    image: remoteUri
                })
                .then(ref => {
                    res(ref);
                })
                .catch(error => {
                    rej(error);
                });
        });
    };

    uploadPhotoAsync = (uri, filename) => {
        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebase
                .storage()
                .ref(filename)
                .put(file);

            upload.on(
                "state_changed",
                snapshot => {},
                err => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            );
        });
    };

    createUser = async user => {
        let remoteUri = null;

        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);

            let db = this.firestore.collection("users").doc(this.uid);

            db.set({
                name: user.name,
                email: user.email,
                avatar: null
            });

            if (user.avatar) {
                remoteUri = await this.uploadPhotoAsync(user.avatar, `avatars/${this.uid}`);

                db.set({ avatar: remoteUri }, { merge: true });
            }
        } catch (error) {
            alert(error);
        }
    };

    signOut = () => {
        firebase.auth().signOut();
    };

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;