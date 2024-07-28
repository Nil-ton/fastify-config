import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';

// Verifica se o nome do arquivo foi fornecido
if (process.argv.length < 3) {
    console.log(process.argv.length)
    console.error('Por favor, forneça o nome do arquivo.');
    process.exit(1);
}

const fileName = process.argv[2];
const filePath = join('src', 'entities', `${fileName}Entity.ts`);

// Conteúdo padrão para o novo arquivo
const fileContent = `
export class ${fileName}Entity {
    constructor() {}
}
`;

// Cria a pasta se ela não existir
const dir = dirname(filePath);
if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
}

// Cria o arquivo com o conteúdo especificado
writeFileSync(filePath, fileContent.trim(), 'utf8');

console.log(`Arquivo ${fileName}.ts criado com sucesso em ${filePath}Entity`);