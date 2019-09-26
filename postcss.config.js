const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./taildwind.js'),
        require('autoprefixer'),
    ]
}