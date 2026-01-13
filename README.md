# React + TypeScript + Vite

# Nome do Projeto
Arquivo limpo para iniciar um novo projeto.
Foi criado as pastas mais importantes e já definido um layout no componente e rotas.

## 🚀 Tecnologias
- React 18
- TypeScript
- Vite
- React Router DOM
- Styled-components
- Bootstrap

## 🎨 Estilos Globais

### Pasta `styles` — arquivo `global.ts`
Utiliza a biblioteca **normalize.css** para padronizar o comportamento dos estilos entre navegadores.

O `GlobalStyle` define:
- Reset e normalização de CSS
- Fonte padrão do projeto
- Cores base
- Configurações globais de layout

Esse arquivo é carregado uma única vez na aplicação.


## 🧭 Rotas (`router`)

A pasta `router` é responsável por **centralizar a configuração de rotas da aplicação**, utilizando o React Router (`createBrowserRouter`).

---

### Funcionamento
- Define as rotas públicas do site institucional
- Utiliza um componente de `Layout` para páginas que compartilham estrutura visual comum
- As páginas são renderizadas dentro do `<Outlet />` definido no Layout

---

### Arquivo `AppRoutes.tsx`
- Responsável por mapear os caminhos (`path`) para seus respectivos componentes de página
- Permite organizar rotas com e sem layout
- Facilita a manutenção e expansão da navegação da aplicação

---

### Integração com a aplicação
O roteamento é inicializado no arquivo `App.tsx` através do componente:

```ts
<RouterProvider router={router} />



## 🧩 Componentes Globais

### Componente `ScrollToTop`
Componente responsável por **resetar o scroll da página ao trocar de rota**.

#### Funcionamento
- Observa a mudança do `pathname` através do `useLocation`
- Executa `window.scrollTo(0, 0)` sempre que a rota muda
- Ele força a página a rolar para o topo quando há mudança de rota.

#### Local de uso
- Importado e utilizado no componente `Layout`
- Afeta todas as páginas que utilizam esse layout

#### Objetivo
- Melhorar a experiência do usuário em navegação SPA
- Evitar que novas páginas carreguem com scroll anterior

------------------------------------------------------------------------------------
### Componente `Layout`
Componente responsável por **definir o layout global da aplicação**, envolvendo todas as páginas que compartilham estrutura visual comum.

### Funcionamento
- Renderiza elementos fixos da aplicação (Header e Footer)
- Utiliza o componente `<Outlet />` do React Router para renderizar o conteúdo dinâmico das páginas
- Permite centralizar comportamentos globais (ex: `ScrollToTop`)

### Local de Uso
- Importado e utilizado na configuração de rotas (`AppRoutes.tsx`)
- Atua como rota pai para páginas que utilizam layout compartilhado

#### Objetivo
- Evitar duplicação de código (Header/Footer em cada página)
- Garantir consistência visual entre páginas
- Facilitar manutenção e evolução do layout

----------------------------------------------------------------------------------

