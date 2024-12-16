import supabase from '@/lib/supabaseClient'

export default async function Page() {
    const {data: products} = await supabase
        .from('products')
        .select('*');
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    )
}