import { Lambda } from "./lambda";

async function handler() {
    console.log("Initializing Lambda");

    const cep = '93548190';
    const lambda = new Lambda();
    return await lambda.process(cep);
};

export { handler };