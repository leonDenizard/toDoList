


## Objetivo: Criar um aplicativo de lista de tarefas básico usando React, onde os usuários possam adicionar e remover tarefas.


- [x] Criar um container para renderizar todo conteúdo do app

- [x] Criar um Header que contém os seguintes elementos:
	- [x] Dia, mês no formato(JAN) e ano
	- [x] Uma foto de perfil do usuário logado 

- [x] Criar um componente InputTask que contém:
	- [x] Input text com placeholder: cadastrar nova tarefa
	- [x] Um botão adicionar  plus-circle (Box-icons)
- [x] Criar um componente TaskList que renderiza as tarefas criadas contendo:
	- [x] Titulo da tarefa
	- [x] data e hora adicionada
	- [x] Botão check ( Box-icons ) para remover a tarefa
Funcionalidades

- [x] Funcionalidade para trazer a data dinamicamente no componente DateComponent
- [x] Criar função handleInputTask responsável por capturar o valor do input no componente InputTask:
	- [x] Utilizar useState para o taskValue informado no input
- [x] Criar uma funcionalidade handleAddTask para tratar o valor recebido do state taskValue
- [x] Criar funcionalidade handleRemoveItem no componente TaskList para remover uma tarefa ao clicar no icone check