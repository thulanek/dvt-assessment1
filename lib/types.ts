import z from 'zod'

export const ProductSchema = z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    rating: z.object({
        rate: z.number(),
        count: z.number()
    })
})


export const ProductArraySchema = z.array(ProductSchema)

export type Product = z.infer<typeof ProductSchema>

export type SortOrFilterItems = { name: string, handler: () => void }[]