import { setAllPosts, setSelectedPostId, setPostDetails } from './post';

describe('Testa actions de Post', ()=> {
    test('Testa set All Posts action', () => {
        const arrayDeTeste = [ 
            {
                id: "0PKw1yXXsDpfPq9Ce7UC",
                name: "Picnic de Inverno em Plutão",
                description: "Único tour que fazemos em planeta anão no sistema solar! Levem casacos que a previsão é de −230 °C",
                planet: "Plutão",
                durationInDays: 980,
                date: "21/12/20"
            },
            {
                id: "axy3Da3wKKeQCR8IGrOg",
                name: "Surfando em Netuno",
                description: "Nenhum surfista intergalático pode ficar fora dessa!",
                planet: "Netuno",
                durationInDays: 540,
                date: "21/12/20"
            },
        ]


        const action = setAllPosts(arrayDeTeste)


        expect(action.type).toEqual("SET_ALL_POSTS")
		expect(action.payload).toEqual({"allPosts": arrayDeTeste})
    })

    test('Testa set Selected PostId action', () => {
        const postIdTeste = "axy3Da3wKKeQCR8IGrOg"


        const action = setSelectedPostId(postIdTeste)


        expect(action.type).toEqual('SET_SELECTED_POST_ID')
		expect(action.payload).toEqual({"selectedPostId": postIdTeste})
    })

    test('Testa set Post Details action', () => {
        const postDetailsTest = {
            "id": "cXUa5YuaJl6JLMC3vxLQ",
            "name": "Festança Marciana",
            "description": "Uma viagem bem legal, na melhor época de marte",
            "planet": "Marte",
            "durationInDays": 228,
            "date": "21/12/21",
            "candidates": [
                {
                    "id": "qoNfe7yZTLzW9sbSYzZB",
                    "applicationText": "Sou um bom candidato porque amo luas",
                    "profession": "Fotógrafo",
                    "age": 22,
                    "name": "Pedro Darvas",
                    "country": "Noruega"
                }
            ],
            "approved": [
                {
                    "id": "EwvFWiOMXBI3e1Dfp9xU",
                    "name": "Soter Padua",
                    "country": "Brasil",
                    "applicationText": "Sou um bom candidato por X, Y e Z",
                    "profession": "Capturador de Bug",
                    "age": 23
                },
                {
                    "id": "IdIbwdY05UmZSLPfxUav",
                    "applicationText": "Pq eu assisti perdido em marte",
                    "profession": "Biologo",
                    "age": "23",
                    "name": "Igor",
                    "country": "Brasil"
                }
            ]
        }

        const action = setPostDetails(postDetailsTest)


        expect(action.type).toEqual("SET_POST_DETAILS")
		expect(action.payload).toEqual({"post": postDetailsTest})
    })
})

    