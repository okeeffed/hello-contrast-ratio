const contrast = require('get-contrast');

const arg = process.argv[2];

if (!arg) {
    console.error('Error: Color arg required eg. "#000"');
    process.exit(1);
}

const isLight = contrast.isAccessible(arg, '#000');
const res = `${arg} is light: ${isLight}. You should use ${isLight
    ? 'black'
    : 'white'} for the font.`;

console.log(res);