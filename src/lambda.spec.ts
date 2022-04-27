import axios from "axios";
import { Lambda } from "./lambda";

describe('Lambda', () => {
    it('Should get data from cep', async () => {
        const lambda = new Lambda();
        const cep = '12345678';
        const cepResponse = {
            cep,
            logradouro: 'logradouro',
            complemento: '',
            bairro: 'bairro',
            localidade: 'localidade',
            uf: 'uf',
            ibge: 'ibge'
        };

        axios.get = jest.fn().mockResolvedValue({ status: 200, data: cepResponse });

        const result = await lambda.process(cep);

        expect(axios.get).toBeCalledTimes(1);
        expect(axios.get).toBeCalledWith(`https://viacep.com.br/ws/${cep}/json`);
        expect(result).toBe(cepResponse);
    });
});