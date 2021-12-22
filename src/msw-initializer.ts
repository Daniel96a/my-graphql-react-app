export default async function mswInit() {
  if (process.env.NODE_ENV === "development") {
    if (window.location.pathname === "") {
      window.location.pathname = "/";
      return;
    }
    const { worker } = require("./mocks/browser");
    await worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
    });
  }
}
