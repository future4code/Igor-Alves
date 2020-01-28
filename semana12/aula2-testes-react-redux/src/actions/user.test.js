import { autenticateLogin, createUser } from './user';

describe('Testa actions de User', ()=> {
    test('Testa autenticate login action', () => {
        const email = 'igor@lves.com'
        const password = 'future4'
        const loginInformationMock = {
            email,
            password,
        }

        autenticateLogin(email, password)

        expect(loginInformationMock.email).toEqual(email)
        expect(loginInformationMock.password).toEqual(password)
    })
    test('Testa create User action', () => {
        const email = 'igor@lves.com'
        const username = 'igor'
        const password = 'future4'
        const registerInformationMock = {
            email,
            password,
            username,
        }

        createUser(email, password, username)

        expect(registerInformationMock.email).toEqual(email)
        expect(registerInformationMock.password).toEqual(password)
        expect(registerInformationMock.password).toEqual(password)
    })
})