import { h } from "https://deno.land/x/sift@0.1.6/mod.ts";
import Layout from "../components/layout.jsx";

export default async function indexPage(req) {
    return (<Layout title="mkfsn.deno.dev">
        <p>Hello world</p>
        <p>
            <a href="https://github.com/mkfsn/mkfsn.deno.dev">
                GitHub Source
            </a>
        </p>
    </Layout>);
}
