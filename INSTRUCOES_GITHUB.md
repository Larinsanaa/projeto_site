# 🚀 Como Subir o Projeto para o GitHub e Hospedar

## ✅ Etapa 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Faça login (ou crie uma conta se não tiver)
3. Clique no botão **"New"** (ou ícone **+** no canto superior direito)
4. Preencha:
   - **Repository name:** `emporio-beer-site` (ou outro nome)
   - **Description:** "Site do Empório Beer - Distribuidora de Bebidas"
   - Deixe como **Public**
   - **NÃO** marque "Add a README file"
5. Clique em **"Create repository"**

## ✅ Etapa 2: Enviar o Projeto

Copie e cole estes comandos **um de cada vez** no Terminal (Mac):

```bash
cd /Users/lari/Documents/2semestre-UCB/desenvolvimentofrontend
```

Depois, cole este comando (substitua `SEU_USUARIO` pelo seu usuário do GitHub):

```bash
git remote add origin https://github.com/SEU_USUARIO/emporio-beer-site.git
```

Por último:

```bash
git branch -M main
git push -u origin main
```

**Vai pedir seu usuário e senha do GitHub!**

## ✅ Etapa 3: Hospedar no GitHub Pages (GRÁTIS!)

No próprio GitHub:

1. Vá no seu repositório
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - Branch: **main**
   - Folder: **/ (root)**
5. Clique em **Save**
6. Aguarde 2-3 minutos
7. **Pronto!** Seu site estará no ar em:
   ```
   https://SEU_USUARIO.github.io/emporio-beer-site/
   ```

## 🎯 Alternativa Mais Fácil: Netlify

Se tiver problema com GitHub Pages:

1. Acesse [netlify.com](https://www.netlify.com/)
2. Faça login com GitHub
3. Clique em **"Add new site"** > **"Import an existing project"**
4. Selecione **GitHub**
5. Escolha o repositório **emporio-beer-site**
6. Clique em **Deploy**
7. **Pronto!** Site no ar em segundos!

URL será algo como: `nome-aleatorio.netlify.app`

Você pode mudar o nome depois em Site Settings.

## 📝 Checklist Final

Antes de entregar:

- [ ] Trocar **"[Seu Nome]"** nos footers pelos nomes dos integrantes
- [ ] Verificar se todas as imagens aparecem
- [ ] Testar todos os links do menu
- [ ] Testar no celular (responsivo)
- [ ] Anotar a URL do site para enviar ao professor

## 🆘 Se Der Erro

**Erro: "Permission denied"**
- Você precisa configurar o Git com seu email:
```bash
git config --global user.email "seu@email.com"
git config --global user.name "Seu Nome"
```

**Erro ao fazer push**
- Talvez precise criar um token de acesso no GitHub
- Vá em: Settings > Developer Settings > Personal Access Tokens
- Crie um token e use ele como senha

## ✨ Dica Extra

Para atualizar o site depois:

```bash
cd /Users/lari/Documents/2semestre-UCB/desenvolvimentofrontend
git add .
git commit -m "Atualização do site"
git push
```

Aguarde 1-2 minutos e o site será atualizado automaticamente!

---

**Boa sorte com o trabalho! 🍺🚀**
