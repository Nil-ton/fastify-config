import { FastifyReply, FastifyRequest } from 'fastify';
import { GeneratePKCEUseCase } from '../useCases/GeneratePKCEUseCase'

export function GeneratePKCEController(req: FastifyRequest, reply: FastifyReply) {
    const generatepkceUseCase = new GeneratePKCEUseCase();
    return generatepkceUseCase.execute();
}