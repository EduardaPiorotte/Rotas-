# 🛍️ Estudo de Caso — Rotas e Consumo de API (Web + Mobile)

Este projeto foi desenvolvido para as atividades práticas de Rotas (Prática 08) e Desenvolvimento Profissional (Prática 09).  
O objetivo é construir uma aplicação **Web com React + Vite** e uma aplicação **Mobile com React Native + Expo**, ambas consumindo uma API real de produtos.

---

# 📦 Estrutura do Repositório

meu-estudo-caso/
├─ web/ → Projeto React + Vite (listagem + detalhes)
└─ mobile/ → Projeto React Native + Expo (listagem + detalhes)

yaml
Copiar código

---

# 🌐 Parte Web (React + Vite)

### Tecnologias utilizadas
- React
- Vite
- Axios
- React Router DOM
- React Bootstrap

### 📡 API Consumida
Endpoint base:
https://proweb.leoproti.com.br/api/v1/product

bash
Copiar código

Swagger:
https://proweb.leoproti.com.br/swagger-ui/index.html

### 🔀 Rotas da Aplicação
| Rota | Função |
|------|--------|
| `/` | Lista todos os produtos |
| `/product/:id` | Detalhes do produto selecionado |

### ▶️ Executar localmente
```bash
cd web
npm install
npm run dev
📱 Parte Mobile (React Native + Expo)
Tecnologias utilizadas
React Native

Expo

React Navigation (Stack)

Axios

🔀 Telas da Aplicação
Tela	Função
Home	Lista os produtos da API
Details	Exibe os detalhes do produto selecionado

▶️ Executar localmente
bash
Copiar código
cd mobile
npm install
npx expo start
🚀 Deploy no Vercel
A aplicação Web está publicada e acessível pelo link:

🔗 https://rotas-l6lmq6l2j-eduarda-gomes-projects-e293d0a8.vercel.app

📚 Como rodar o projeto completo
Clone o repositório:

bash
Copiar código
git clone https://github.com/EduardaPiorotte/Rotas-.git
Acesse as pastas e execute cada projeto conforme explicado acima:

Para Web → pasta /web

Para Mobile → pasta /mobile

🧩 Objetivo Pedagógico
O estudo de caso demonstra:

Navegação com React Router e React Navigation

Consumo de API REST usando Axios

Organização de pastas em projetos reais

Deploy profissional com Vercel

Desenvolvimento Web + Mobile integrado

👩‍💻 Autora
Projeto desenvolvido por Eduarda Piorotte para fins acadêmicos.