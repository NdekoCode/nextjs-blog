import { categoriesSchema } from '../schemas/post.schema';

export const getCategories = async()=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
        const categories = await res.json()
        return categoriesSchema.parse(categories)
    } catch (error) {
        console.error(error)
        throw error
    }
}