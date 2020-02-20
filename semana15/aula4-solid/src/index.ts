import { NormalPostCreator } from "./NormalPostCreator";
import { ErrorPrinter } from "./ErrorPrinter";

// const oi = new NormalPostCreator()

// oi.createNormalPost('igor', 'blabla')


const error = new ErrorPrinter()

error.onError('deu errado certo', new Date)