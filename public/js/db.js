import { db } from "./firebase.js";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
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
    const { doc, type } = change;
    console.log(type);
    if (type === "added") {
      renderRecipe(doc.data(), doc.id);
    } else if (type === "removed") {
      console.log(change.type);
      removeRecipe(doc.id);
    }
  });
});

//add new recipe

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const recipe = {
    title: form.title.value,
    ingredients: form.ingredients.value.replace(/\s+/g, "").split(","),
  };

  const newRecipe = addDoc(collection(db, "recipes"), recipe);
  console.log(newRecipe);
  form.title.value = "";
  form.ingredients.value = "";
});

// remove a recipe
const recipeContainer = document.querySelector(".recipes");
recipeContainer.addEventListener("click", (evt) => {
  if (evt.target.tagName === "I") {
    const id = evt.target.getAttribute("data-id");
    console.log(id);
    deleteDoc(doc(db, "recipes", id));
  }
});
