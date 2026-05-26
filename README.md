# aluguel-de-maquinarios

Sistema web estatico para aluguel de maquinarios da Nexum.

## Funcionalidades entregues no Sprint 4

- Criar aluguel pela pagina de detalhes do equipamento.
- Listar alugueis recentes na visao geral do painel.
- Listar todos os alugueis em "Meu Painel > Meus Alugueis".
- Editar datas de um aluguel existente com recalculo automatico do total.
- Excluir aluguel com modal de confirmacao.
- Exibir mensagens de sucesso e erro por toast.
- Editar dados do perfil e manter usuario atual e lista de usuarios sincronizados.
- Cadastrar, listar, editar e excluir equipamentos de contas empresa.
- Carregar o formulario de equipamento com os dados corretos ao clicar em "Editar".
- Atualizar equipamentos sem duplicar registros, usando o ID existente.
- Layout responsivo para painel, cards de aluguel, formularios e modais.

## Como testar manualmente

1. Abra `cadastro.html` e crie uma conta.
2. Acesse `equipamentos.html`, escolha um equipamento disponivel e solicite um aluguel em `detalhes.html`.
3. Entre em `painel.html` e confira os cards na visao geral e na aba "Meus Alugueis".
4. Use "Editar" para alterar as datas e valide se dias e valor total mudam.
5. Use "Excluir", cancele uma vez e depois confirme a exclusao.
6. Em "Meu Perfil", edite telefone, cidade e estado e confirme o toast de sucesso.
7. Crie uma conta do tipo empresa, entre em "Meu Painel > Meus Equipamentos" e cadastre um equipamento.
8. Clique em "Editar", confirme se o formulario abre preenchido e salve as alteracoes.

## Armazenamento

Os dados sao salvos no `localStorage` do navegador:

- `nexum_usuarios`
- `nexum_usuario_atual`
- `nexum_alugueis`
- `nexum_equipamentos_empresa`
- `meuPerfil_<email-do-usuario>`
