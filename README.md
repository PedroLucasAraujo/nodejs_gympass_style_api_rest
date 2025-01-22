# nodejs_gympass_style_app_api_rest

Esse projeto se trata um API REST para um aplicativo como gympass, totalpass, aonde é possível fazer check-in nas academias (cadastro, paga valor mensal, dá acesso a x números de vezes que pode ir e academia, indepedente da academia, algumas disponíveis para cada planos)

## RFS (Requisitos Funcionais)

- [] Deve ser possível se cadastrar;
- [] Deve ser possível se autenticar;
- [] Deve ser possível obter o perfil de um usuário logado;
- [] Deve ser possível obter o número de check ins realizados pelo usuário logado;
- [] Deve ser possível o usuário obter seu histórico de check ins;
- [] Deve ser possível o usuário buscar academias próximas
- [] Deve ser possível o usuários buscar academias pelo nome;
- [] Deve ser possível o usuário realizar check-in em uma academia;
- [] Deve ser possível validar o check in de um usuário;
- [] Deve ser possível cadastrar uma academia;
 
## RNS (Regras de Negócio)

- [] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [] O usuário não pode fazer 2 check-ins no mesmo dia;
- [] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [] O check in só pode ser validado até 20 minutos após criado;
- [] O check in só pode ser validado por administradores
- [] A academia só pode ser cadastrada por administradores;

## RNFS (Requisitos Não Funcionais) 

- [] A senha do usuário precisa estar criptografada
- [] Os dados precisam estar persistidos em um banco POSTGRESQL
- [] Todas listas de dados precisam estar paginadas com 20  itens por página
- [] O usuário deve ser identifiado por um JWT (JSON WEB TOKEN)
