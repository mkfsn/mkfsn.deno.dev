import { h } from "https://deno.land/x/sift@0.1.6/mod.ts";

export default function Layout({title, children}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>{children}</body>
        </html>
    );
}
