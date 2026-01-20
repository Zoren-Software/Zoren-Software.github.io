# Jogadores

Organize e acompanhe os jogadores do seu clube no VolleyTrack. Esta seção cobre desde o cadastro até o gerenciamento completo de informações dos jogadores.

## 📋 Listagem de Jogadores

![Jogadores](./images/players.png)

Na tela de listagem de jogadores, você tem acesso às seguintes funcionalidades:

### Funcionalidades Principais

- **Adicionar**: Cadastre um novo jogador.
- **Deletar**: Remova jogadores existentes.
- **Pesquisar**: Encontre jogadores cadastrados.
- **Limpar**: Restaure os critérios de busca para uma nova pesquisa.

### Filtros Avançados

Refine sua busca utilizando filtros como:

- **Posições**: Filtre jogadores por suas posições.
- **Times**: Selecione jogadores pertencentes a times específicos.

---

## ➕ Adicionar um Novo Jogador

Ao clicar em **Adicionar**, você será direcionado para um formulário dividido em etapas. Navegue entre as etapas utilizando os botões **Anterior** e **Próximo** e, ao finalizar, clique em **Salvar**.

### 📝 Etapa 1: Informações Essenciais

![Adicionar Jogador](./images/player-informations-1.png)

**1.1. Nome**: Informe o nome completo do jogador para identificação precisa.

**1.2. E-mail**: Forneça um e-mail válido, que será utilizado para login e recuperação de conta.

---

### 👤 Etapa 2: Informações Pessoais

**2.1. Data de Nascimento**: Insira a data de nascimento no formato **DD/MM/AAAA**.

**2.2. Celular**: Digite o número de contato com DDD, por exemplo: **(11) 91234-5678**.

**2.3. CPF**: Informe o CPF sem pontos ou traços, apenas números.

**2.4. RG**: Insira o número do RG, podendo incluir pontos e o dígito verificador.

---

### 🔐 Etapa 3: Permissões

**3.1. Nível de Acesso**: Defina o papel do usuário na plataforma:

- **Técnico**: Para usuários que irão gerenciar times e treinos.
- **Jogador**: Para atletas que acompanharão seu desempenho.

---

### 🏐 Etapa 4: Posição

**4.1. Posições**: Selecione a posição do jogador na equipe:

- **Central**: Responsável por bloqueios e ataques rápidos pelo meio da rede.
- **Levantador**: Organiza as jogadas e distribui os passes para os atacantes.
- **Líbero**: Especialista em recepção e defesa, não participa do ataque.
- **Oposto**: Principal atacante da equipe, geralmente finaliza as jogadas.
- **Ponteiro**: Atua nas extremidades da rede, auxiliando no ataque e na recepção.

**4.2. Relacionar**: Após selecionar a posição, clique em **Relacionar** para associar o jogador à posição escolhida. Lembre-se de que um jogador pode ser associado a múltiplas posições.

**4.3. Deletar**: Para remover uma posição associada, clique no ícone de **lixeira** na seção de ações correspondente à posição que deseja excluir.

---

## 📊 Estatísticas do Jogador

Ao clicar em **"Detalhes do jogador"** na listagem de jogadores ou no Dashboard, um modal será aberto exibindo informações detalhadas e estatísticas do jogador selecionado.

![Estatísticas do Jogador](./images/modal-player-information.png)

### Cabeçalho do Modal

- **Avatar**: Círculo colorido com a inicial do jogador
- **Nome do Jogador**: Nome completo exibido no título do modal
- **Botão Fechar**: Ícone "X" no canto superior direito para fechar o modal

### Estatísticas de Presença e Treinos

O modal exibe dois cards principais com estatísticas consolidadas:

#### Card de Presença

- **Ícone**: Checkmark verde
- **Percentual**: Taxa de presença nos treinos finalizados (ex: 100%)
- **Descrição**: "Presença" com explicação "Percentual de presença nos treinos finalizados"

#### Card de Treinos

- **Ícone**: Ícone laranja representando treinos
- **Estatísticas**: Formato "X / Y / Z" onde:
  - X: Número de presenças
  - Y: Número total de treinos finalizados
  - Z: Outro indicador relacionado
- **Descrição**: "Treinos" com ícone de informação
- **Nota**: "Apenas treinos finalizados são considerados nas estatísticas"

### Posição do Jogador

- **Seção**: "Posição"
- **Badge**: Badge cinza mostrando a posição do jogador (ou "Sem posição" se não houver posição associada)

### Visão Técnica dos Treinos

Esta seção apresenta um gráfico radar visualizando o desempenho do jogador em cada fundamento:

#### Gráfico Radar

- **Eixos**: Seis eixos representando os fundamentos:
  - **Saque**: Valor de desempenho no saque
  - **Recepção**: Valor de desempenho na recepção
  - **Ataque**: Valor de desempenho no ataque
  - **Bloqueio**: Valor de desempenho no bloqueio
  - **Defesa**: Valor de desempenho na defesa
  - **Levantamento**: Valor de desempenho no levantamento

- **Escala**: Valores de 0 a 100, com marcas em 20, 40, 50, 80 e 100
- **Visualização**: Polígono laranja preenchido conectando os valores de cada fundamento
- **Interpretação**: Quanto maior a área preenchida, melhor o desempenho geral do jogador

### Ranking de Presença nos Times

Esta seção mostra o desempenho do jogador em cada time ao qual ele pertence:

#### Informações por Time

Para cada time relacionado, você verá:

- **Avatar do Time**: Círculo colorido com identificador do time
- **Nome do Time**: Nome completo do time
- **Categoria**: Categoria e nível (ex: Sub-17, Prata)
- **Percentual de Presença**: Taxa de presença do jogador naquele time específico
- **Posição no Ranking**: Badge cinza mostrando a posição do jogador no ranking do time (ex: 2º)
- **Estatísticas Detalhadas**:
  - **Presenças**: Formato "X/Y" (presenças/total de treinos)
  - **Total de Jogadores no Time**: Número total de jogadores cadastrados no time

### Ações do Modal

- **Cancelar**: Botão cinza para cancelar e fechar o modal
- **Fechar**: Botão laranja para fechar o modal

---

---

## 🔄 Relacionamento Automático com Treinos Futuros

O VolleyTrack possui uma funcionalidade automática que facilita o gerenciamento de jogadores e treinos, economizando tempo e garantindo consistência nos dados.

### Como Funciona

Quando um jogador é relacionado a um time que já possui treinos futuros cadastrados, o sistema automaticamente:

1. **Adiciona o Jogador aos Treinos Futuros**: O jogador é automaticamente incluído em todos os treinos futuros do time a partir da data atual.
2. **Mantém a Sincronização**: O relacionamento é mantido automaticamente, garantindo que o jogador apareça em todos os treinos agendados.

### Quando Acontece

Esta automação ocorre em duas situações principais:

#### 1. Ao Adicionar um Jogador a um Time

Quando você relaciona um jogador a um time (seja durante o cadastro do jogador ou posteriormente):

- ✅ O jogador é automaticamente adicionado a todos os treinos futuros do time
- ✅ Apenas treinos com data igual ou posterior à data atual são considerados
- ✅ Treinos passados ou já finalizados não são afetados

#### 2. Ao Remover um Jogador de um Time

Quando você remove a relação de um jogador com um time:

- ✅ O jogador é automaticamente removido de todos os treinos futuros do time
- ✅ Apenas treinos com data igual ou posterior à data atual são afetados
- ✅ O histórico de presença em treinos passados é preservado

### Benefícios

- **Economia de Tempo**: Não é necessário adicionar manualmente cada jogador a cada treino futuro
- **Consistência**: Garante que todos os jogadores do time estejam sempre sincronizados com os treinos
- **Automação Inteligente**: O sistema cuida da sincronização automaticamente, evitando erros manuais
- **Facilita o Trabalho dos Técnicos**: Reduz significativamente o trabalho manual de gerenciamento

### Exemplo Prático

1. Você cadastra treinos futuros para o time "5 Squadra B" de janeiro a dezembro de 2026
2. Em março, você adiciona um novo jogador ao time "5 Squadra B"
3. O sistema automaticamente adiciona esse jogador a todos os treinos futuros do time a partir de março
4. Se você remover esse jogador do time em junho, ele será automaticamente removido dos treinos futuros a partir de junho

::: tip DICA
Esta funcionalidade funciona apenas com treinos futuros (com data igual ou posterior à data atual). Treinos passados ou já finalizados não são modificados automaticamente, preservando o histórico de presença.
:::

---

## 💡 Dicas

- Um jogador pode ter múltiplas posições associadas.
- Use os filtros para encontrar jogadores rapidamente.
- Mantenha as informações pessoais atualizadas para facilitar a comunicação.
- **Visualize Estatísticas**: Clique em "Detalhes do jogador" para ver análises completas de desempenho.
- **Compare Desempenho**: Use o gráfico radar para identificar pontos fortes e áreas de melhoria.
- **Acompanhe por Time**: Monitore como o jogador se desempenha em diferentes times.
- **Relacionamento Automático**: Ao adicionar um jogador a um time, ele é automaticamente incluído nos treinos futuros do time.

---

## 🔙 Navegação

[← Voltar para a página inicial](./index.md)

