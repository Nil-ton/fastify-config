import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';

// Verifica se o nome do arquivo foi fornecido
if (process.argv.length < 3) {
    console.error('Por favor, forneça o nome do arquivo.');
    process.exit(1);
}

const fileName = process.argv[2].charAt(0).toUpperCase() + process.argv[2].slice(1);

// Caminho e conteúdo para o arquivo UseCase
const filePathUseCase = join('src', 'useCases', `${fileName}UseCase.ts`);
const fileContentUseCaseFile = `
export class ${fileName}UseCase {
    async execute() {}
}
`;

// Cria o diretório src/useCases se ele não existir
const dirUseCase = dirname(filePathUseCase);
if (!existsSync(dirUseCase)) {
    mkdirSync(dirUseCase, { recursive: true });
}

// Cria o arquivo UseCase com o conteúdo especificado
writeFileSync(filePathUseCase, fileContentUseCaseFile.trim(), 'utf8');
console.log(`Arquivo ${fileName}UseCase.ts criado com sucesso em ${filePathUseCase}`);

// Caminho e conteúdo para o arquivo Controller
const filePathController = join('src', 'controllers', `${fileName}Controller.ts`);
const fileContentControllerFile = `
import { FastifyReply, FastifyRequest } from 'fastify';
import { ${fileName}UseCase } from '../useCases/${fileName}UseCase'

export function ${fileName}Controller(req: FastifyRequest, reply: FastifyReply) {
    const ${fileName.toLowerCase()}UseCase = new ${fileName}UseCase();
    return ${fileName.toLowerCase()}UseCase.execute();
}
`;

// Cria o diretório src/controllers se ele não existir
const dirController = dirname(filePathController);
if (!existsSync(dirController)) {
    mkdirSync(dirController, { recursive: true });
}

// Cria o arquivo Controller com o conteúdo especificado
writeFileSync(filePathController, fileContentControllerFile.trim(), 'utf8');
console.log(`Arquivo ${fileName}Controller.ts criado com sucesso em ${filePathController}`);
