Feature: Search Page

  Background:
    Given que eu esteja na aplicacao

  Scenario: Validar pesquisa de usuario com dados
    When pesquisar um usuario
    Then confirmar se a pesquisa foi realizada

  Scenario: Pesquisa um codigo inexistente
    When pesquisar um codigo que não existe
    Then deve apresentar a mensagem de codigo nao encontrado

  Scenario: Pesquisa sem um codigo preenchido
    When pesquisar sem preencher o codigo
    Then deve aprensentar a mensagem de preenchimento
