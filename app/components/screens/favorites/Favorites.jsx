import { formatToCurrency } from '@/app/helpers/formatToCurrency'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { MdStars } from 'react-icons/md'
import { useSelector } from 'react-redux'
import s from './Favorites.module.scss'
const Favorites = () => {
	const items = useSelector(state => state.favorites.itemsInFavorites)
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

					<div className={s.card__hearts}></div>
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
