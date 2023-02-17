import Link from 'next/link'
import React from 'react'
import s from './CartMenu.module.scss'
import { calcTotalPrice } from '@/app/helpers/calcTotalPrice'
import { formatToCurrency } from '@/app/helpers/formatToCurrency'
const CartMenu = ({ items, onClick }) => {
	return (
		<div className={s.cart_menu}>
			<ul className={s.cart_menu__list}>
				{items.length > 0 ? (
					items.map((p, id) => (
						<li key={id}>
							<span>{p.title}</span> <span>{formatToCurrency(p.price)}</span>{' '}
						</li>
					))
				) : (
					<div>Корзина пуста</div>
				)}
				{items.length > 0 ? (
					<div className={s.cart_menu__arrange}>
						<div className={s.cart_menu__price}>
							<span>Итог: </span>
							<span>{formatToCurrency(calcTotalPrice(items))}</span>
						</div>
						<Link legacyBehavior href={'/cart'}>
							<button className={s.cart_menu__btn} onClick={onClick}>
								Оформить заказ!
							</button>
						</Link>
					</div>
				) : null}
			</ul>
		</div>
	)
}

export default CartMenu
