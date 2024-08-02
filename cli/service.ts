import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';

// Verifica se o nome do arquivo foi fornecido
if (process.argv.length < 3) {
    console.error('Por favor, forneça o nome do arquivo.');
    process.exit(1);
}

const fileName = process.argv[2].charAt(0).toUpperCase() + process.argv[2].slice(1);

// Caminho e conteúdo para o arquivo UseCase
const filePathinterface = join('src', 'interfaces', `I${fileName}.ts`);
const fileContentUseCaseFile = `
export interface I${fileName} {}
`;

// Cria o diretório src/useCases se ele não existir
const dirInterface = dirname(filePathinterface);
if (!existsSync(dirInterface)) {
    mkdirSync(dirInterface, { recursive: true });
}

// Cria o arquivo UseCase com o conteúdo especificado
writeFileSync(filePathinterface, fileContentUseCaseFile.trim(), 'utf8');
console.log(`Arquivo I${fileName}.ts criado com sucesso em ${filePathinterface}`);

// Caminho e conteúdo para o arquivo Controller
const filePathService = join('src', 'services', `${fileName}.ts`);
const fileContentControllerFile = `
import { I${fileName} } from '../interfaces/I${fileName}'

export class ${fileName} implements I${fileName} {
    constructor() {}
}
`;

// Cria o diretório src/controllers se ele não existir
const dirService = dirname(filePathService);
if (!existsSync(dirService)) {
    mkdirSync(dirService, { recursive: true });
}

// Cria o arquivo Controller com o conteúdo especificado
writeFileSync(filePathService, fileContentControllerFile.trim(), 'utf8');
console.log(`Arquivo ${fileName} criado com sucesso em ${filePathService}`);
