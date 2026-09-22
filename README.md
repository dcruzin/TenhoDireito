# TenhoDireito

Avaliação preliminar, simples e responsável, de situações de direito do trabalho em Portugal.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Produção

```bash
npm run build
go run ./server
```

O frontend React é gerado em `dist/`. O servidor Go disponibiliza esse diretório e aceita `PORT` e `STATIC_DIR` por variáveis de ambiente. A mesma versão estática é publicada no GitHub Pages pelo workflow incluído no repositório.

## Estado das integrações

A avaliação e a preparação do pedido funcionam localmente. O formulário não envia dados: a integração com um serviço seguro e o conteúdo jurídico verificado deverão ser adicionados antes de produção.
