import { formatToCurrency } from '@/app/helpers/formatToCurrency'
import { deleteToCart } from '@/app/store/slices/cartSlice'
import Image from 'next/image'
import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import s from './Cart.module.scss'
const CartItem = ({ item }) => {
	const dispatch = useDispatch()
	const deleteItem = () => {
		dispatch(deleteToCart(item.id))
	}

	return (
		<>
			<div className={s.item}>
				<div className={s.item__left}>
					<div className={s.item__image}>
						<Image
							src={item.thumbnail}
							className={s.image}
							layout='fill'
							objectFit='contain'
							alt={item.name}
						/>
					</div>
				</div>
				<div className={s.item__center}>
					<h3 className={s.item__info}>{item.title}</h3>
				</div>
				<div className={s.item__right}>
					<div className={s.item__price}>
						<div>{formatToCurrency(item.price)}</div>
						<button className={s.item__btn}>
							<MdDeleteOutline size={24} onClick={deleteItem} />
						</button>
						{/* <div className='flex items-center'>
							<button className='mr-2'>-</button>
							<input type='text' value={count} className='text-center w-8' />
							<button className='ml-2' onClick={() => increase(item.id)}>
								+
							</button>
						</div> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default CartItem
