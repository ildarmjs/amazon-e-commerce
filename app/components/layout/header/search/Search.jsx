import { fetchAsyncSearch } from '@/app/store/slices/searchSlice'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from '../Header.module.scss'
const Search = () => {
	const [term, setTerm] = useState('')
	const [isOpen, setIsOpen] = useState(true)
	const dispatch = useDispatch()
	const submitHandler = e => {
		setTerm(e.target.value)
		dispatch(fetchAsyncSearch(term))
	}
	const items = useSelector(state => state.search.items)
	const inputClickHandler = e => {
		e.preventDefault()
		setIsOpen(true)
	}
	const itemClickHandler = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={s.header__search}>
			<form className={s.header__form}>
				<input
					className={s.header__input}
					type='text'
					placeholder='Search'
					value={term}
					onChange={submitHandler}
					onClick={inputClickHandler}
				/>
			</form>
			{term && isOpen ? (
				<div
					className={
						term !== 0
							? 'absolute top-12 border-[#ff9900] border-2 rounded-2xl  max-h-96 h-auto overflow-auto left-0 bg-[#3d4f68] text-white w-[400px] z-10 p-4'
							: 'opacity-100'
					}
				>
					<ul className={s.header__list}>
						{items.map(item => (
							<Link legacyBehavior href={`/product/${item.id}`}>
								<li onClick={itemClickHandler} className='flex items-center'>
									<Image
										className='mr-4'
										src={item.thumbnail}
										alt={item.title}
										width={50}
										height={30}
									/>
									{item.title}
								</li>
							</Link>
						))}
					</ul>
				</div>
			) : null}
		</div>
	)
}

export default Search
