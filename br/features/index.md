# Utilizando as Funcionalidades do VolleyTrack

## Página Inicial

![Página Inicial](./images/home.png)

Na tela inicial, você tem acesso rápido às três principais funcionalidades:

- **Registrar Jogadores**
- **Registrar Times**
- **Registrar Treinos**

## Treinos

![Treinos](./images/trainings.png)

Gerencie seus treinos com as seguintes opções:

- **Adicionar**: Insira um novo treino.
- **Deletar**: Remova treinos existentes.
- **Pesquisar**: Encontre treinos cadastrados.
- **Limpar**: Restaure os critérios de busca para uma nova pesquisa.
- **Filtros Avançados**: Refine sua busca utilizando filtros como:
  - **Times**: Filtre por equipes específicas.
  - **Usuário**: Identifique quem realizou alterações.
  - **Jogadores**: Selecione treinos envolvendo jogadores específicos.
  - **Data de Início e Fim**: Defina um intervalo de datas para os treinos.

### Editar Treino / Informações do treino

Ao clicar em **Editar** em um treino existente, você será direcionado para um formulário dividido em três etapas. Navegue entre as etapas utilizando os botões **Anterior** e **Próximo** e, ao finalizar, clique em **Salvar**. Você também pode usar os botões **Finalizar Treino** ou **Cancelar Treino** conforme necessário.

#### Etapa 1: Informações Essenciais

![Editar Treino - Informações Essenciais](./images/training-info-part-1.png)

1.1. **Nome**: Informe ou edite o nome do treino para identificação.

1.2. **Data Treino**: Selecione a data do treino utilizando o seletor de data no formato **DD/MM/AAAA**.

1.3. **Horário Início**: Defina o horário de início do treino no formato de 12 horas (ex: 4:08 PM).

1.4. **Horário Fim**: Defina o horário de término do treino no formato de 12 horas (ex: 5:08 PM).

1.5. **Descrição do Treino**: Adicione uma descrição detalhada sobre o conteúdo e objetivos do treino.

1.6. **Status do Treino**: Selecione o status atual do treino:
   - **PENDING**: Treino agendado, ainda não realizado.
   - **FINISHED**: Treino finalizado.
   - **CANCELLED**: Treino cancelado.

1.7. **Fundamentos**: Gerencie os fundamentos gerais relacionados ao treino:
   - Visualize os fundamentos já associados na tabela.
   - Remova fundamentos clicando no ícone de **lixeira** na coluna "AÇÕES".

1.8. **Fundamentos Específicos**: Gerencie os fundamentos específicos do treino:
   - Visualize os fundamentos específicos já associados na tabela.
   - Remova fundamentos específicos clicando no ícone de **lixeira** na coluna "AÇÕES".

1.9. **Relacionar Time**: Associe um time ao treino:
   - Se já houver um time relacionado, ele será exibido na tabela.
   - Remova a relação clicando no ícone de **lixeira** na coluna "AÇÕES".

1.10. **Jogadores Relacionados**: Visualize os jogadores que fazem parte do time relacionado:
   - Cada jogador é exibido com avatar, nome, telefone e posições.
   - Os jogadores são automaticamente incluídos quando um time é relacionado.

1.11. **Jogadores Avulsos**: Adicione jogadores que não fazem parte do time relacionado:
   - Clique em **"BUSCAR E SELECIONAR JOGADORES AVULSOS"** para abrir a busca.
   - Digite o nome do jogador no campo de busca.
   - Clique em **"+ Adicionar Jogador Avulso"** para incluir o jogador no treino.
   - Os jogadores avulsos adicionados aparecerão na seção "Jogadores Avulsos Adicionados".

#### Etapa 2: Chamada do Treino

![Editar Treino - Chamada do Treino](./images/training-info-part-2.png)

2.1. **Métricas do Treino - Intenção de Presença**: Visualize as estatísticas de confirmação dos jogadores:
   - **Confirmados**: Quantidade e porcentagem de jogadores que confirmaram presença.
   - **Pendentes**: Quantidade e porcentagem de jogadores que ainda não responderam.
   - **Rejeitados**: Quantidade e porcentagem de jogadores que rejeitaram o convite.
   - **Total Pessoas no Time**: Número total de pessoas relacionadas ao treino.

2.2. **Métricas do Treino - Presença Real**: Visualize as estatísticas de presença efetiva:
   - **Presentes**: Quantidade e porcentagem de jogadores que compareceram.
   - **Ausentes**: Quantidade e porcentagem de jogadores que não compareceram.

2.3. **Barras de Progresso**: Acompanhe visualmente as métricas através de barras de progresso:
   - **Respostas de Intenção de Presença**: Barra laranja mostrando a porcentagem de respostas recebidas.
   - **Presença no Treino**: Barra verde mostrando a porcentagem de presença real.

2.4. **Jogadores Relacionados - Gerenciamento Individual**: Para cada jogador listado, você pode:
   - Visualizar informações: nome, posição e telefone de contato.
   - **Intenção de Presença**: 
     - Visualizar o status atual (Confirmado, Pendente ou Rejeitado).
     - Clicar em **"Confirmar"** para marcar a intenção como confirmada.
     - Clicar em **"Rejeitar"** para marcar a intenção como rejeitada.
   - **Presença Real**:
     - Visualizar o status atual (Presente ou Ausente).
     - Clicar em **"Marcar como Presente"** para registrar a presença.
     - Clicar em **"Marcar como Ausente"** para registrar a ausência.

#### Etapa 3: Marcações de Scouts

![Editar Treino - Marcações de Scouts](./images/training-info-part-3.png)

3.1. **Seleção de Jogador**: No painel lateral esquerdo:
   - Utilize o filtro **"FILTRAR POR POSIÇÃO"** para filtrar jogadores por posição específica.
   - Selecione um jogador da lista para visualizar e editar seus scouts.
   - O jogador selecionado será destacado visualmente.

3.2. **Filtro de Fundamentos**: No painel superior direito:
   - Utilize o filtro **"FILTRAR FUNDAMENTOS"** para focar em fundamentos específicos durante a marcação.

3.3. **Marcação de Scouts por Fundamentos**: Para cada fundamento (Saque, Recepção, Ataque, Bloqueio, Defesa, Levantamento):
   - **Botões de Avaliação**: Clique nos botões coloridos para registrar as ações:
     - **A+** (Verde): Ações positivas/excelentes - incrementa o contador.
     - **B+** (Amarelo): Ações regulares/neutras - incrementa o contador.
     - **C+** (Vermelho): Ações negativas/erros - incrementa o contador.
   - **Lista de Resultados**: Visualize os resultados específicos registrados:
     - Cada resultado é exibido com um indicador colorido (verde, laranja ou vermelho).
     - Os resultados são categorizados automaticamente conforme o tipo de ação.
   - **Total**: Visualize o total de ações registradas para o fundamento.
   - **Feedback Específico**: Adicione observações técnicas específicas para o fundamento no campo de texto disponível.

3.4. **Observações Técnicas Gerais**: No final da página:
   - Adicione observações gerais sobre o desempenho do jogador no campo de texto **"Observações Técnicas Gerais"**.

![Editar Treino - Estatísticas de Scouts](./images/training-info-part-3-statistics.png)

3.5. **Visualização de Estatísticas**: Ao alternar para a aba **"Estatísticas"**, você terá acesso a:

3.6. **Resumo da Avaliação**:
   - **Total de Avaliações**: Número total de ações registradas para o jogador.
   - **Eficiência (A)**: Porcentagem de ações classificadas como excelentes.
   - **Regular (B)**: Porcentagem de ações classificadas como regulares.
   - **Erros (C)**: Porcentagem de ações classificadas como erros.

3.7. **Performance por Fundamentos**: Visualize o desempenho do jogador em cada fundamento:
   - Cada fundamento exibe uma barra de progresso visual.
   - A barra mostra a distribuição entre ações positivas (verde) e regulares/erros (laranja/vermelho).
   - Um valor numérico indica a quantidade total de ações registradas.

3.8. **Gráfico Radar**: Visualize a performance do jogador de forma gráfica:
   - O gráfico radar apresenta seis eixos, um para cada fundamento.
   - Os valores numéricos são plotados em cada eixo.
   - A área preenchida representa o perfil de desempenho geral do jogador.

3.9. **Sugestões de Melhoria**:
   - **Melhor Fundamentos**: Exibe o fundamento com melhor desempenho e sua porcentagem.
   - **Precisa Melhorar**: Exibe o fundamento que precisa de mais atenção e sua porcentagem.

3.10. **Ações Finais**: Utilize os botões no rodapé:
   - **Salvar Scouts**: Salve as marcações de scouts realizadas.
   - **Finalizar Treino**: Finalize o treino após concluir todas as marcações.
   - **Cancelar Treino**: Cancele o treino e descarte as alterações.
   - **Salvar**: Salve o progresso sem finalizar o treino.



## Times

![Times](./images/teams.png)

Gerencie suas equipes através das seguintes funcionalidades:

- **Adicionar**: Crie um novo time.
- **Deletar**: Exclua times existentes.
- **Pesquisar**: Localize times cadastrados.
- **Limpar**: Redefina os critérios de busca para uma nova pesquisa.
- **Filtros Avançados**: Utilize filtros adicionais, como:
  - **Posições**: Filtre jogadores por suas posições.
  - **Usuário**: Verifique quem realizou alterações.
  - **Jogadores**: Encontre times que incluem jogadores específicos.

## Jogadores

![Jogadores](./images/players.png)

Organize e acompanhe os jogadores com as seguintes funcionalidades:

- **Adicionar**: Cadastre um novo jogador.
- **Deletar**: Remova jogadores existentes.
- **Pesquisar**: Encontre jogadores cadastrados.
- **Limpar**: Restaure os critérios de busca para uma nova pesquisa.
- **Filtros Avançados**: Refine sua busca utilizando filtros como:
  - **Posições**: Filtre jogadores por suas posições.
  - **Times**: Selecione jogadores pertencentes a times específicos.

### Adicionar um Novo Jogador


Ao clicar em **Adicionar**, você será direcionado para um formulário dividido em etapas. Navegue entre as etapas utilizando os botões **Anterior** e **Próximo** e, ao finalizar, clique em **Salvar**.

#### 1. Informações Essenciais

![Adicionar Jogador](./images/player-informations-1.png)

1.1. **Nome**: Informe o nome completo do jogador para identificação precisa.

1.2. **E-mail**: Forneça um e-mail válido, que será utilizado para login e recuperação de conta.

#### 2. Informações Pessoais

2.1. **Data de Nascimento**: Insira a data de nascimento no formato **DD/MM/AAAA**.

2.2. **Celular**: Digite o número de contato com DDD, por exemplo: **(11) 91234-5678**.

2.3. **CPF**: Informe o CPF sem pontos ou traços, apenas números.

2.4. **RG**: Insira o número do RG, podendo incluir pontos e o dígito verificador.

#### 3. Permissões

3.1. **Nível de Acesso**: Defina o papel do usuário na plataforma:

- **Técnico**: Para usuários que irão gerenciar times e treinos.
- **Jogador**: Para atletas que acompanharão seu desempenho.

#### 4. Posição

4.1. **Posições**: Selecione a posição do jogador na equipe:

- **Central**: Responsável por bloqueios e ataques rápidos pelo meio da rede.
- **Levantador**: Organiza as jogadas e distribui os passes para os atacantes.
- **Líbero**: Especialista em recepção e defesa, não participa do ataque.
- **Oposto**: Principal atacante da equipe, geralmente finaliza as jogadas.
- **Ponteiro**: Atua nas extremidades da rede, auxiliando no ataque e na recepção.

4.2. **Relacionar**: Após selecionar a posição, clique em **Relacionar** para associar o jogador à posição escolhida. Lembre-se de que um jogador pode ser associado a múltiplas posições.

4.3. **Deletar**: Para remover uma posição associada, clique no ícone de **lixeira** na seção de ações correspondente à posição que deseja excluir.
