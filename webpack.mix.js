const mix = require('laravel-mix');

mix.js('resources/js/app.jsx', 'public/js')
   .react()
   .sass('resources/sass/app.sass', 'public/css');

if (mix.inProduction()) {
    mix.version();
}

mix.browserSync({
    proxy: 'http://127.0.0.1:8000', // URL server Laravel
    files: [
        'resources/views/**/*.blade.php',
        'resources/js/**/*.jsx', // atau .js jika menggunakan JavaScript biasa
        'resources/sass/**/*.sass', // atau .scss jika menggunakan SCSS
        'public/js/**/*.js',
        'public/css/**/*.css'
    ],
    open: false,
    notify: false,
});
