import Link from 'next/link'
import React from 'react'
import s from './CartMenu.module.scss'
import { calcTotalPrice } from '@/app/helpers/calcTotalPrice'
import { useDispatch } from 'react-redux'
import { deleteToCart } from '@/app/store/slices/cartSlice'
import { formatToCurrency } from '@/app/helpers/formatToCurrency'
const CartMenu = ({ items, onClick }) => {
	return (
		<div className={s.cart_menu}>
			<ul className={s.cart_list}>
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
					<div className={s.arrange}>
						<div className={s.cart_totalPrice}>
							<span>Итог: </span>
							<span>{formatToCurrency(calcTotalPrice(items))}</span>
						</div>
						<Link legacyBehavior href={'/cart'}>
							<button className={s.btn_cart} onClick={onClick}>
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
