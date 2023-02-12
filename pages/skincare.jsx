import Container from '@/app/components/container/Container'
import AllProducts from '@/app/components/screens/all-products/AllProducts'
import Meta from '@/app/uttils/Meta'
import React from 'react'

const skincare = ({ products }) => {
	return (
		<>
			<Meta title='Для ухода за кожей' />
			<Container>
				{products.map(product => (
					<AllProducts key={product.id} product={product} />
				))}
			</Container>
		</>
	)
}
export const getServerSideProps = async () => {
	const res = await fetch('https://dummyjson.com/products/category/skincare')
	const { products } = await res.json()
	return {
		props: {
			products,
		},
	}
}
export default skincare
// https://fakestoreapi.com/products/category/men's%20clothing
