import { addToCard, deleteToCart } from '@/app/store/slices/cartSlice'
import {
	addToFavorites,
	deleteToFavorites,
} from '@/app/store/slices/favoritesSlice'
import Image from 'next/image'
import React from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import Gallery from './gallery/Gallery'

import s from './Product.module.scss'
const Product = ({ product }) => {
	const dispatch = useDispatch()
	const items = useSelector(state => state.cart.itemsInCart)

	const isItemsInCart = items.some(item => item.id === product.id)
	const handleClickCart = e => {
		e.stopPropagation()
		if (isItemsInCart) {
			dispatch(deleteToCart(product.id))
		} else {
			dispatch(addToCard(product))
		}
	}
	const favorites = useSelector(state => state.favorites.itemsInFavorites)
	const isItemsInFavorites = favorites.some(item => item.id === product.id)
	const handleClickFavorites = e => {
		e.stopPropagation()
		if (isItemsInFavorites) {
			dispatch(deleteToFavorites(product.id))
		} else {
			dispatch(addToFavorites(product))
		}
	}
	return (
		<div className='flex'>
			<div className='flex-shrink-0 flex-grow-0 basis-[40%]'>
				<Gallery images={product.images} key={product.id} />
			</div>
			<div>
				<h1 className='text-4xl font-bold mb-3'>{product.title}</h1>
				<div className='mb-3'>
					<span className='font-bold'>Бренд: </span>
					<span className=''>{product.brand}</span>
				</div>
				<div className='mb-4'>
					<h3 className='font-bold'>Описание</h3>
					<p>{product.description}</p>
				</div>
				<div className='flex items-center'>
					<button
						className={
							isItemsInCart
								? 'bg-white border-orange-400 border border-solid inline-flex justify-center items-center h-[50px] rounded-xl px-5 text-black'
								: 'inline-flex justify-center items-center h-[50px] rounded-xl bg-[#ff9900] px-5 text-white'
						}
						onClick={handleClickCart}
					>
						{isItemsInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
					</button>
					<div className='ml-4 cursor-pointer' onClick={handleClickFavorites}>
						{isItemsInFavorites ? (
							<BsSuitHeartFill size={30} color={'#ff9900'} />
						) : (
							<BsSuitHeart size={30} color={'#ff9900'} />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
