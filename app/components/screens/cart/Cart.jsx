import { calcTotalPrice } from '@/app/helpers/calcTotalPrice'
import { formatToCurrency } from '@/app/helpers/formatToCurrency'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import s from './Cart.module.scss'
import CartItem from './CartItem'
const Cart = () => {
	const items = useSelector(state => state.cart.itemsInCart)
	if (items.length === 0) {
		return (
			<div>
				<h2 className={s.title}>Ваша корзина пуста</h2>
				<Link legacyBehavior href={'/'}>
					<a>Вернуться на главную</a>
				</Link>
			</div>
		)
	}
	return (
		<div className={s.order}>
			<h2 className={s.title}>Корзина</h2>
			{items.map(item => (
				<CartItem item={item} key={item.id} />
			))}
			<div className={s.order_info}>
				<div>Заказ на сумму: {formatToCurrency(calcTotalPrice(items))}</div>
				<button className={s.btn_price}>Оформить!</button>
			</div>
		</div>
	)
}

export default Cart
