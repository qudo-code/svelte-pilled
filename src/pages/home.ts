import projectStructure from "../img/project-structure";

const introCards = [
    {
        title: "Faster Performance",
        description: "Svelte.js is compiled, not interpreted, leading to faster performance and better user experience."
    },
    {
        title: "Ease of Use",
        description: "Svelte.js has a simple and intuitive API, making it a great choice for both beginners and seasoned developers to speed up their workflow."
    },
    {
        title: "Smaller Bundles",
        description: "As Svelte.js compiles your code to efficient vanilla JavaScript, it results in smaller and faster loading bundles."
    },
].map(card => /*html*/ `
    <div class="shadow-xl rounded-3xl p-5 bg-white">
        <h3 class="text-2xl font-bold mb-2">${card.title}</h3>
        <p class="text-gray-500">${card.description}</p>
    </div>
`).join("");

export const home = () => /*html*/ `
    <header class="shadow-lg bg-gray-200 min-h-[30rem] rounded-3xl mb-8 flex justify-center items-center relative p-3 overflow-hidden max-w-7xl mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 227" fill="none" class="absolute left-0 top-0 min-h-full min-w-full">
            <rect width="100%" height="100%" rx="5" fill="url(#paint0_linear_1_2)"/>
            <defs>
                <linearGradient id="paint0_linear_1_2" x1="7.71428" y1="9.08" x2="618.82" y2="137.312" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FE5F75"/>
                    <stop offset="1" stop-color="#FC9842"/>
                </linearGradient>
            </defs>
        </svg>
        <div class="relative text-white">
            <h2 class="text-5xl md:text-7xl font-black mb-2">
                Take The <span class="font-light">Svelte</span> Pill
            </h2>
            <p class="text-gray-100 text-lg">Resources and example projects to level up your Svelte.js skills.</p>
        </div>
    </header>

    <section class="max-w-7xl mx-auto mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            ${introCards}
        </div>
    </section>

    <section class="max-w-5xl mx-auto rounded-3xl shadow-lg p-5 bg-white my-8">
        <div>
            <h2 class="text-3xl font-black mb-2">Getting Started</h2>
            <p class="text-gray-500">To start, we will need some .svelte files and a build system that can compile them. Navigate to where you keep your projects and run the following to generate a simple Svelte project (not SvelteKit) using Vite. Pick "Svelte" then "Typescript".</p>
        </div>
        <div class="rounded-2xl p-5 bg-gray-800 text-white mt-5 text-lg">
            npm create vite@latest my-svelte-app
        </div>
    </section>

    <section class="max-w-5xl mx-auto rounded-3xl shadow-lg p-5 bg-white grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="">
            <h2 class="text-3xl font-black mb-2">Project Structure</h2>
            <p class="text-gray-500">Once you've generated the boilerplate project, it should look something like this screenshot. Let's dive into some of the important files.</p>
            <div class="my-5">
                <h3 class="text-xl font-bold mb-2">📁 public</h3>
                <p class="text-gray-500">This is where you keep your public assets. The files in this directory will be hosted at your domain.</p>
            </div>
            <div class="my-5">
                <h3 class="text-xl font-bold mb-2">📁 lib</h3>
                <p class="text-gray-500">A place to keep components and utils.</p>
            </div>
            <div class="my-5">
                <h3 class="text-xl font-bold mb-2">📄 index.html</h3>
                <p class="text-gray-500">This is the template that will wrap your whole app. This is where you could link Google Fonts or add script tags such as Google Analytics.</p>
            </div>
            <div class="my-5">
                <h3 class="text-xl font-bold mb-2">📄 app.css</h3>
                <p class="text-gray-500">This is where to keep global styles and themes.</p>
            </div>
            <div class="my-5">
                <h3 class="text-xl font-bold mb-2">📄 main.ts</h3>
                <p class="text-gray-500">This is the apps entry point. This is where you can import global styles and define a root component to mount to the document, in this example it's App.svelte.</p>
            </div>
        </div>
        <div class="mx-auto">
            <img src="data:image/png;base64, ${projectStructure}" class="rounded-3xl w-full" />
        </div>
    </section>
`;