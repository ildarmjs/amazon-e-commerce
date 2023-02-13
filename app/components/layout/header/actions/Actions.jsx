import CartMenu from '@/app/components/ui/cart-menu/CartMenu'
import { calcTotalPrice } from '@/app/helpers/calcTotalPrice'
import { formatToCurrency } from '@/app/helpers/formatToCurrency'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { BsCart2, BsSuitHeart } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import avatar from '@/app/assets/avatar.jpg'
import s from '../Header.module.scss'
const Actions = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
	const items = useSelector(state => state.cart.itemsInCart)
	const favorites = useSelector(state => state.favorites.itemsInFavorites)
	const totalPrice = calcTotalPrice(items)
	return (
		<div className={s.actions}>
			<Link legacyBehavior href={'/favorites'}>
				<div className={s.likes}>
					<span>{favorites.length}</span>
					<BsSuitHeart size={20} />
				</div>
			</Link>

			<div className={s.cart}>
				<span>{items.length}</span>
				<BsCart2
					size={20}
					onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
				/>
			</div>
			<div className={s.total_price}>{formatToCurrency(totalPrice)}</div>
			{isCartMenuVisible && (
				<CartMenu items={items} onClick={() => setIsCartMenuVisible(false)} />
			)}
			<div className={s.avatar}>
				<Image
					className={s.img}
					src={avatar}
					alt='avatar'
					width={36}
					height={36}
				/>
			</div>
		</div>
	)
}

export default Actions
