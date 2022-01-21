if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => {
      console.log("register service worker", reg);
    })
    .catch((err) => {
      console.log("notregistered", err);
    });
}
