const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix.js("resources/js/app.js", "public/js")
    .react()
    .sass("resources/sass/app.scss", "public/css")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")],
    })
    .disableSuccessNotifications();

mix.webpackConfig({
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": __dirname + "/resources/js"
        }
    }
});
