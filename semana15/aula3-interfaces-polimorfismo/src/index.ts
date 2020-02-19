import { ResidentialClient } from "./ResidentialClient";
import { CommercialClient } from "./CommercialClient";
import { IndustrialClient } from "./IndustrialClient";
import { ClientManager } from "./ClientManager";



// Usuários residenciais
const darvas = new ResidentialClient('Darvas', '000.000.000-00', '00.000-000', 'Darvas', 123456, 130) 
const goli = new ResidentialClient('Goli', '111.111.111-11', '11.111-111', 'Goli', 654321, 100) 


// Usuários comerciais
const future4 = new CommercialClient('Future4', '63.353.415/0001-69', '12.345-678', 'Future4', 987654, 400)
const provi = new CommercialClient('Provi', '48.773.775/0001-26', '98.765-432', 'Provi', 991827, 500)


// Usuários industriais
const petrobras = new IndustrialClient('Petrobras', '123456789', '29.101-320', 'Petrobras', 666777, 200000)
const vale = new IndustrialClient('Vale', '987654321', '35181-672', 'Vale', 666999, 150000)


// Administrador de clientes
const sysAdmin = new ClientManager()

// Adicionando clientes
sysAdmin.addClient(darvas)
sysAdmin.addClient(goli)
sysAdmin.addClient(future4)
sysAdmin.addClient(provi)

// Pegando a quantidade total de clientes
console.log("Total de clientes:", sysAdmin.getClientsQuantity())

// Mostrando cada cliente e o valor cobrado na conta
sysAdmin.printClientBills()

// Mostrando a quantia total a ser recebida de todos os clientes
sysAdmin.calculateAllIncome()

