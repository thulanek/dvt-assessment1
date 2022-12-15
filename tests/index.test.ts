import { Product, ProductArraySchema } from '../lib/types'
import 'isomorphic-fetch';

describe("API Resquests", () => {
    test("whether the API returns data and that data is true to the expected model", async() => { 

        const fetchedData = await (await global.fetch('https://fakestoreapi.com/products')).json() as Product[]
        const fetchDataInCorrectSchema = ProductArraySchema.safeParse(fetchedData).success

        expect(fetchDataInCorrectSchema).toBe(true)
    })
})