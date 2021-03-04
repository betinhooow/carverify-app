Feature: Info page

  Background:
    Given que eu esteja na pagina de pesquisa

  Scenario: Apresenta usuario sem carros
    When eu pesquisar um usuario sem carros
    Then apresenta apenas as informacoes do usuario

  Scenario: Apresenta usuario com carros
    When eu pesquisar um usuario com carros
    Then deve apresentar as informacoes do veiculo
    And confirmar se a mensagem de rodizio esta aparecendo

  Scenario: Valida ordenacao das tabs
    When ao pesquisar um usuario com carros
    And quando eu clicar em uma placa
    Then a aba de informacao deve estar em primeiro

