import { createLambdaServer } from '../src/server';

const server = createLambdaServer();

export const handler = server.createHandler({
    cors: {
        origin: '*'
    }
});