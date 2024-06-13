const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma tecnologia, um chat que consegue reponder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?"
        alternativas: [
            "Isso é assustador!",
            "Isso é maravilhoso!"
        ]
    },

    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            "Utiliza uma ferramenta de busca na internet IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa línguagem que facilite o entendimento",
            "Escreve o trabalho com base nas conversas que teve com colegas , algumas pesquisas e conhecimentos próprios sobre o tema."
        ]
    },

    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como  IA impacta o trabalho do futuro. Nesse debate, como vocẽ se posiciona?",
        alternativas: [
            "defende a ideia de que a IA pode criar novas oportunidade de emprego e melhorar habilidades humanas.",
            "Me preocupo com a pessoas que perderão seus empregos para máquinas e defendem a importância de proteger sus trabalhadores.",
        ]
    },
]