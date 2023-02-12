import Product from '@/app/components/screens/product/Product'

const InfoProduct = ({ product }) => {
	console.log(product)
	return <Product product={product} />
}

export const getStaticPaths = async () => {
	const res = await fetch(`https://dummyjson.com/products`)
	const { products } = await res.json()
	const paths = products.map(p => ({ params: { id: p.id.toString() } }))
	return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
	const res = await fetch(`https://dummyjson.com/products/${params.id}`)
	const product = await res.json()
	return {
		props: {
			product,
		},
		revalidate: 10,
	}
}

export default InfoProduct
