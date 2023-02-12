import React from 'react'
import s from './AllProducts.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { MdStars } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import {
	addToFavorites,
	deleteToFavorites,
} from '@/app/store/slices/favoritesSlice'
import { formatToCurrency } from '@/app/helpers/formatToCurrency'

const AllProducts = ({ product }) => {
	let price = product.price
	const dispatch = useDispatch()
	const items = useSelector(state => state.favorites.itemsInFavorites)
	const isItemsInFavorites = items.some(item => item.id === product.id)
	const handleClick = e => {
		e.stopPropagation()
		if (isItemsInFavorites) {
			dispatch(deleteToFavorites(product.id))
		} else {
			dispatch(addToFavorites(product))
		}
	}
	// ;<div onClick={handleClick}>
	// 	{isItemsInFavorites ? (
	// 		<BsSuitHeartFill size={20} className={s.btn_heart} />
	// 	) : (
	// 		<BsSuitHeart size={20} className={s.btn_heart_outline} />
	// 	)}
	// </div>
	return (
		<div className={s.card}>
			<Link legacyBehavior href={`/product/${product.id}`}>
				<a className={s.card__link}>
					<div className={s.card__image}>
						<Image
							className={s.image}
							src={product.thumbnail}
							alt={product.title}
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</a>
			</Link>

			<div className={s.card__hearts} onClick={handleClick}>
				{isItemsInFavorites ? (
					<BsSuitHeartFill size={20} color={'#ff9900'} />
				) : (
					<BsSuitHeart size={20} />
				)}
			</div>
			<div className={s.card__info}>
				<h3 className={s.card__title}>{product.title}</h3>
				<h4 className={s.card__brand}>{product.brand}</h4>
				<div className={s.card__stars}>
					<MdStars className={s.star} size={24} />
					<span>{product.rating}</span>
				</div>

				<div className={s.card__price}>{formatToCurrency(price)}</div>
			</div>
		</div>
	)
}

export default AllProducts
