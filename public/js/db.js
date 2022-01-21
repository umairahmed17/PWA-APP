import { db } from "./firebase.js";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  enableIndexedDbPersistence,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

//Offline data
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == "failed-precondition") {
    console.error("persistance failed"); // Probably multiple taba sopened at once
  } else if (err.code == "unimplemented") {
    console.error("persistance is not avialable"); //lack of browser support
  }
});

//real time lsitenr
const unsub = onSnapshot(collection(db, "recipes"), (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      const { doc } = change;
      renderRecipe(doc.data(), doc.id);
    }
    if (change.type === "removed") {
      //
    }
  });
});
