# Redesign do Portfólio e Suporte Multi-idioma

O objetivo é modernizar a aparência do portfólio, tornando-o mais profissional e premium, mantendo o esquema de cores azul. Além disso, implementarei suporte para Português, Inglês e Espanhol.

## Mudanças Propostas

### [Internacionalização (i18n)]
Vou implementar um sistema simples de internacionalização baseado em Context API para gerenciar PT, EN e ES.

#### [NOVO] [LanguageContext.tsx](file:///c:/projects/web-my-portfolio/src/context/LanguageContext.tsx)
Criar um contexto para gerenciar o idioma atual e fornecer as traduções.

#### [NOVO] [translations.ts](file:///c:/projects/web-my-portfolio/src/data/translations.ts)
Mover os dados do `data.json` para um arquivo TypeScript estruturado com suporte para múltiplos idiomas.

### [Redesign de UI/UX]
Vou atualizar os estilos globais e as seções individuais para seguir uma linguagem de design moderna e premium.

#### [MODIFICAR] [globals.css](file:///c:/projects/web-my-portfolio/src/styles/globals.css)
- Definir uma paleta de cores mais sofisticada (tons de azul profundo, acentos em ciano, tokens de glassmorphism).
- Usar uma fonte mais moderna (Inter ou Outfit).
- Adicionar animações globais e efeitos de scroll.

#### [NOVO] [LanguageSwitcher.tsx](file:///c:/projects/web-my-portfolio/src/components/LanguageSwitcher.tsx)
Um seletor elegante para alternar entre os idiomas.

#### [MODIFICAR] [Seções](file:///c:/projects/web-my-portfolio/src/sections/)
Atualizar todas as seções (`InitialSection`, `AboutSection`, `SkillSection`, etc.) para:
- Usar o novo sistema de tradução.
- Implementar um layout moderno e responsivo com melhor espaçamento e tipografia.
- Adicionar micro-animações sutis (ex: efeitos de hover, entradas em scroll).

### [Refinamento]
- Garantir que todas as seções sejam totalmente responsivas.
- Otimizar assets e layout para performance.

## Plano de Verificação

### Testes Automatizados
- N/A (Mudanças principalmente visuais)

### Verificação Manual
- Verificar o layout em diferentes tamanhos de tela (mobile, tablet, desktop).
- Validar se a troca de idioma atualiza todos os componentes de texto corretamente.
- Garantir que todos os links e elementos interativos funcionem conforme o esperado.
- Validar se o tema "azul" está consistente e passa uma sensação premium.
