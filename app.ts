import { boot } from "./app/app";
import { appConfig } from "./config/app";
import { routes } from "./routes/web";
import { Bihongo } from "./system/src/core/Bihongo";

const app = Bihongo.app({
  boot: boot,
  routes: routes,
});
// run server
app.listen(appConfig.port, () => {
  console.log(`Server is running on port ${appConfig.port}`);
});
