import axios from "axios";
import { CepResponse } from "./cepResponse";

class Lambda {
    private readonly baseUrl = "https://viacep.com.br/ws/";

    async process(cep: string): Promise<CepResponse> {
        console.log('processing cep:', cep);

        const response = await axios.get(`${this.baseUrl}${cep}/json`);

        console.log('Response:', response.data);

        if (response.status == 200) {
            return Promise.resolve(response.data as CepResponse);
        }

        return Promise.reject('Error with get data from cep');
    }
}

export { Lambda };