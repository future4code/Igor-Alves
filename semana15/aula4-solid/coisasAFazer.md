### Dependency Inversion Principle (DIP) - Princípio de Inversão de Dependência

O nosso sistema, agora, já possui todas as funcionalidades básicas, mas vamos fazer uma pequena refatoração nesse código. Até agora, todas as classes de criação de Post estavam chamando uma instância própria do `ErrorPrinter`. O problema de fazermos isso é que, agora, não queremos mais que os erros sejam mostrados no console, mas gostaríamos de salvá-los em um array dentro de um JSON, para que fique fácil de achá-los quando quisermos. Do jeito que o nosso código está agora, precisaríamos alterar diretamente as classes, certo? Vamos fazer isso, mas de tal forma que, agora, adicionemos a ideia de inversão de dependência.

O primeiro ponto vai ser criar uma interface chamada `ErrorTracker` que deve possuir um método `onError` , que recebe uma mensagem e uma data de ocorrência do erro.

O segundo será fazer com que a classe `ErrorPrinter` implemente a interface `ErrorTracker`. Depois, vamos criar outra classe `ErrorLogger` que implementará o `ErrorTracker`.

Por fim, a inversão de dependências ocorrerá da seguinte forma: as classes que criam os Posts já possuem uma propriedade chamada `errorTracker` (do tipo `ErrorTracker`) e ela deve ser inicializada no construtor.

1. Crie uma interface `ErrorTracker` que possua um método `onError` que espera receber uma mensagem de erro e uma data relativa a ele.
2. Faça com que a `ErrorPrinter` implemente o interface `ErrorTracker`. 
3. Altere os códigos das classes de criar post de tal forma que ela receba no construtor a propriedade `ErrorTracker`.
4. Crie um classe `ErrorLogger` que implemente a interface `ErroTracker`. O método `onError` deve salvar os erros em array em um arquivo JSON.
5. Agora, utilizando a classe `NormalPostCreator` e `ErrorLogger`, tente criar um post com valores inválidos e salvar o erro em um arquivo JSON.