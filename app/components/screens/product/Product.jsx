import { addToCard, deleteToCart } from '@/app/store/slices/cartSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Gallery from './Gallery/Gallery'
import s from './Product.module.scss'
const Product = ({ product }) => {
	const dispatch = useDispatch()
	const items = useSelector(state => state.cart.itemsInCart)

	const isItemsInCart = items.some(item => item.id === product.id)
	const handleClick = e => {
		e.stopPropagation()
		if (isItemsInCart) {
			dispatch(deleteToCart(product.id))
		} else {
			dispatch(addToCard(product))
		}
	}
	return (
		<div className='flex'>
			<div>
				<Gallery images={product.images} key={product.id} />
			</div>
			<div>
				<h1 className='text-4xl font-bold mb-3'>{product.title}</h1>
				<div className='mb-3'>
					<span className='text-3xl'>Бренд: </span>
					<span className='text-2xl'>{product.brand}</span>
				</div>
				<div className='text-3xl'>
					<h3>Описание</h3>
					<p>{product.description}</p>
				</div>
				<div>
					<button
						className='inline-flex min-h-[40px] bg-slate-700 p-10 text-center'
						onClick={handleClick}
					>
						{isItemsInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Product
