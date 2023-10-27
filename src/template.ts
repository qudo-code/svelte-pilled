import type { TemplateRenderer } from "./types";

export const template: TemplateRenderer = (page, props = {}) => /*html*/ `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Svelte Pilled</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-100">
        <nav class="p-5 shadow bg-white max-w-7xl rounded-3xl mx-auto my-3 flex justify-between items-center">
            <div class="flex items-center">
                <img src="https://imgs.search.brave.com/XMKRyYpA1n75pckJPcxeojR9cgqlIY8DvZNLfk9aVIg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFiL1N2ZWx0ZV9M/b2dvLnN2Zw.svg" class="h-7 mr-1" />
                <h3 class="font-black text-xl uppercase">    
                    💊
                </h3>
            </div>
            <div class="flex gap-3 text-gray-500 text-lg">
                <a href="/">GitHub</a>
                <a href="/">Twitter</a>
                <a href="/">Discord</a>
            </div>
        </nav>

        <main class="p-3">
            ${page(props)}
        </main>
    </body>
</html>
`