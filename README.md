Configuração inicial para iniciar apis com fastify usando bibliotecas nativas node e typescript.

# Instalar dependencias
```
npm install
```
```javascript
 "devDependencies": {
    "@types/node": "^22.0.0",
    "tsx": "^4.16.2",
    "typescript": "^5.5.4"
  },
  "dependencies": {
    "@fastify/cors": "^9.0.1",
    "fastify": "^4.28.1"
  }
```

# CLI
### Criar entidades
```
npm run create-entity [nome da entidade]
```

### Criar um caso de uso e um controller
```
npm run create-useCase [nome do caso de uso]
```

# Teste
```
npm test
```

# Build
```
npm run build
```
