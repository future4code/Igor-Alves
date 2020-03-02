import { Place } from "./place";

export class Commerce extends Place {
  constructor(
    public name: string,
    // Refere-se ao nome da indústria

    public cnpj: string,
    // Refere-se ao número de registro da empresa

    cep: string
  ) {
    super(cep);
  }
}
