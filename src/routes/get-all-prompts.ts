import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function GetAllPrompts(app:FastifyInstance){
    app.get('/prompts', async () => {
        const promps = await prisma.prompt.findMany({})
        return promps;
    })
}