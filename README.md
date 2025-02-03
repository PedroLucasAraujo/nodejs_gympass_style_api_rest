# nodejs_gympass_style_app_api_rest

Esse projeto se trata um API REST para um aplicativo como gympass, totalpass, aonde é possível fazer check-in nas academias (cadastro, paga valor mensal, dá acesso a x números de vezes que pode ir e academia, indepedente da academia, algumas disponíveis para cada planos)

## RFS (Requisitos Funcionais)

- [x] Deve ser possível se cadastrar;
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

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [] O usuário não pode fazer 2 check-ins no mesmo dia;
- [] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [] O check in só pode ser validado até 20 minutos após criado;
- [] O check in só pode ser validado por administradores
- [] A academia só pode ser cadastrada por administradores;

## RNFS (Requisitos Não Funcionais)

- [x] A senha do usuário precisa estar criptografada
- [] Os dados precisam estar persistidos em um banco POSTGRESQL
- [] Todas listas de dados precisam estar paginadas com 20 itens por página
- [] O usuário deve ser identifiado por um JWT (JSON WEB TOKEN)

- Um caso de uso serve para orquestrar as entidades e regras da aplicação
- As principais responsibilidade dos Controllers é de intermedia a requisição, repassar os dados para os casos de uso retornar os dados quando necessário
- "Salt" no contexto de hashing de senha, é um valor aleatório adicionado à senha antes de gerar o hash
- O padrão repository serve para abstrair a persistÊncia de dados
- No SOLID, a inversão de dependência serve par a evitar acoplamento e tornar a aplicação mais flexível
- O principal benefício da utilização de interfaces de contrato na inversão de depência é permitir a substituição de implementações sem modificar o código cliente
- Ao utilizar uma interface para um repositório, nossa aplicação dependerá de uma abstração e isso a tornará mais flexível e mnos acoplada
