import Container from '@/app/components/container/Container'
import AllProducts from '@/app/components/screens/all-products/AllProducts'
import Meta from '@/app/uttils/Meta'
import React from 'react'

const smartphones = ({ products }) => {
	return (
		<>
			<Meta title='Смартфоны.' />
			<Container>
				{products.map(product => (
					<AllProducts key={product.id} product={product} />
				))}
			</Container>
		</>
	)
}
export const getServerSideProps = async () => {
	const res = await fetch('https://dummyjson.com/products/category/smartphones')
	const { products } = await res.json()
	return {
		props: {
			products,
		},
	}
}

export default smartphones
