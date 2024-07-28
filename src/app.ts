import fastify from "fastify";
import cors from '@fastify/cors'

const app = fastify()
const port = 3333

app.register(cors)

app.listen({port}).then(() => console.log(`HTTP server running in http://localhost:3333`))