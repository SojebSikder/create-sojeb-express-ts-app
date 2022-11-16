import { boot } from "./app/app";
import { appConfig } from "./config/app";
import { routes } from "./routes/web";
import { Bihongo } from "bihongojs";

const app = Bihongo.app({
  boot: boot,
  routes: routes,
});
// run server
app.listen(appConfig.port, () => {
  console.log(`Server is running on port ${appConfig.port}`);
});
