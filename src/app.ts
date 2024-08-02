import fastify from "fastify";
import cors from '@fastify/cors'
import cookie from '@fastify/cookie'
import { getRoutes } from "./routes/get";
import { middleware } from "./routes/middleware";
import { config } from "./config/env";

const app = fastify()
const port = config.port

app.register(cors, {
    credentials: true,
    methods: ['GET', 'POST']
})
app.register(cookie)
app.addHook('preHandler', middleware)
app.register(getRoutes)


app.listen({port}).then(() => console.log(`HTTP server running in http://localhost:3333`))