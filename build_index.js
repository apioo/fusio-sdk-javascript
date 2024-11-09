import fs from 'fs/promises'

var content = '';

const files = await fs.readdir('./src');
files.forEach(function (file) {
    content+= 'export * from "./' + file.substring(0, file.indexOf('.')) + '";' + "\n";
});

await fs.writeFile('./src/index.ts', content);
