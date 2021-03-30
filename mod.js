import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";

serve({
  "/": "mkfsn.deno.dev",
  404: "Not Found",
});
