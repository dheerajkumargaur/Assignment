import { Workbox } from "workbox-window";

const register = () => {
  if ("serviceWorker" in navigator) {
    const wb = new Workbox(`${process.env.PUBLIC_URL}/service-worker.js`);

    wb.addEventListener("activated", (event) => {
      if (!event.isUpdate) {
        console.log("Service worker activated for the first time!");
      }
    });

    wb.register();
  }
};

export default register();