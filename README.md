# 🌿 Zensite Front

Uma landing page moderna, performática e otimizada para SEO, desenvolvida com **Next.js 16**, **React 19** e *
*TypeScript**. O projeto inclui páginas institucionais, blog integrado e uma arquitetura preparada para escalabilidade.

## 🚀 Tecnologias Principais

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI:** [React 19](https://react.dev/) & [Tailwind CSS](https://tailwindcss.com/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Backend/API:
  ** [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server) & [GraphQL Request](https://graphql-request.com/)
- **CMS/Database:** [Firebase Admin](https://firebase.google.com/docs/admin)
- **Qualidade de Código:** ESLint

## ✨ Funcionalidades

- [x] **Performance:** Pontuação alta no Core Web Vitals através de otimização nativa do Next.js.
- [x] **SEO:** Meta tags dinâmicas e estrutura semântica para melhor ranqueamento.
- [x] **Blog:** Sistema de blog integrado consumindo dados via GraphQL.
- [x] **Responsividade:** Design *mobile-first* adaptável a qualquer dispositivo.
- [x] **Estilização:** Uso de Tailwind CSS para componentes rápidos e consistentes.

## 🛠️ Instalação e Uso

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. O projeto utiliza o `npm` como gerenciador de pacotes.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/zensite-front.git
   cd zensite-front
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto e adicione as chaves necessárias (ex: Firebase, URLs de API).

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:3000` no seu navegador.

## 📁 Estrutura do Projeto

```text
src/
├── app/          # Rotas e páginas (App Router)
├── components/   # Componentes reutilizáveis de UI
├── lib/          # Configurações de bibliotecas (Firebase, GraphQL)
└── styles/       # Arquivos de estilo globais
```

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE).
Desenvolvido com 💚 por Paulo Souza
