import { serve, serveStatic } from "https://deno.land/x/sift@0.1.6/mod.ts";
import indexPage from "./pages/index.jsx";

serve({
  "/": indexPage,
  404: () => new Response("Not Found", {headers: {"content-type": "text/html; charset=utf-8"}}),
});
