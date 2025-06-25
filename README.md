# UPX-3
🌿 EcoGastos - UPX-3
EcoGastos é uma plataforma interativa que ajuda você a calcular e reduzir o consumo de água, energia e transporte. Seu principal objetivo é promover a conscientização ambiental de forma simples e acessível, incentivando práticas sustentáveis para um futuro melhor. 🌱♻️

🔧 O que é o EcoGastos?
É um site composto por:

Duas calculadoras: uma para consumo de água e outra para energia.

Um sistema de login e histórico de cálculos.

Uma API desenvolvida em Java (com Spring Boot).

Um banco de dados MySQL.

Um front-end feito com HTML, CSS e JavaScript.

💻 Estrutura do Projeto
O projeto é dividido em duas pastas:

UPX-web-Ecogastos – Contém o front-end.

Projeto – Contém o back-end, desenvolvido em Java (Spring Boot).

🔸 Importante: o projeto foi desenvolvido usando o Visual Studio Code. Recomendamos que você utilize essa IDE para evitar erros inesperados.

🧰 Requisitos para Rodar o Projeto
Visual Studio Code instalado.

Extensões do VS Code:

Live Server

Extension Pack for Java

Spring Boot Extension Pack

MySQL instalado na máquina.

🚀 Como Executar o Projeto

1. Baixar e Abrir as Pastas
Baixe as pastas UPX-web-Ecogastos e Projeto separadamente (não coloque uma dentro da outra).

Abra a pasta UPX-web-Ecogastos no VS Code.

2. Rodar o Front-End
Localize o arquivo index.html.

Clique no botão "Go Live" no canto inferior direito do VS Code (recurso da extensão Live Server).

O site será aberto automaticamente em seu navegador.

3. Configurar o Banco de Dados
Abra a pasta Projeto no VS Code.

Navegue até o arquivo application.properties:
src > main > resources > application.properties

Altere:
O campo username = root (caso seu usuário seja diferente substitua o root pelo seu usuário).

O campo password = senha (onde está escrito senha coloque a senha do seu MySQL).

Salve o arquivo.


Agora, vá até o arquivo BancoDeDadosCreator.java:
src > main > java > API > projeto > BancoDeDadosCreator.java

Altere:
Linha 11: String USER = "root"; (caso seu usuário seja diferente substitua o root pelo seu usuário).

Linha 12: String PASSWORD = "senha"; (onde está escrito senha coloque a senha do seu MySQL).

Salve o arquivo.


4. Rodar o Back-End
Execute o arquivo BancoDeDadosCreator.java para criar o banco de dado no MySQL.

Em seguida, execute o arquivo ProjetoApplication.java para iniciar o servidor Spring Boot.


5. Atualizar o Navegador
Volte para a aba do navegador onde o site está aberto.

Pressione F5 para atualizar a página.

✅ Pronto! Agora você já pode usar a plataforma EcoGastos para fazer seus cálculos e acompanhar seus consumos diretamente pelo navegador.

Se precisar de ajuda, estarei por aqui!
