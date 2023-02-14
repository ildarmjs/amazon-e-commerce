import { formatToCurrency } from '@/app/helpers/formatToCurrency'
import { deleteToFavorites } from '@/app/store/slices/favoritesSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { MdStars } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import s from './Favorites.module.scss'
const Favorites = () => {
	const items = useSelector(state => state.favorites.itemsInFavorites)
	const dispatch = useDispatch()
	const deleteItem = id => {
		dispatch(deleteToFavorites(id))
	}
	if (items.length <= 0) {
		return <h1 className='text-3xl font-bold'>Избранные товары отсутсвуют</h1>
	}
	return (
		<>
			{items.map(item => (
				<div className={s.card}>
					<Link legacyBehavior href={`/product/${item.id}`}>
						<a className={s.card__link}>
							<div className={s.card__image}>
								<Image
									className={s.image}
									src={item.thumbnail}
									alt={item.title}
									layout='fill'
									objectFit='contain'
								/>
							</div>
						</a>
					</Link>

					<div className={s.card__hearts}>
						<BsSuitHeartFill
							size={20}
							color={'#ff9900'}
							onClick={() => deleteItem(item.id)}
						/>
					</div>
					<div className={s.card__info}>
						<h3 className={s.card__title}>{item.title}</h3>
						<h4 className={s.card__brand}>{item.brand}</h4>
						<div className={s.card__stars}>
							<MdStars className={s.star} size={24} />
							<span>{item.rating}</span>
						</div>

						<div className={s.card__price}>{formatToCurrency(item.price)}</div>
					</div>
				</div>
			))}
		</>
	)
}

export default Favorites
