import React, { useState } from 'react'
import s from './Header.module.scss'
import Logo from './logo/Logo'
import Actions from './actions/Actions'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncSearch } from '@/app/store/slices/searchSlice'
import Link from 'next/link'

const Header = () => {
	const [term, setTerm] = useState('')
	const [isOpen, setIsOpen] = useState(true)
	const dispatch = useDispatch()
	const submitHandler = e => {
		setTerm(e.target.value)
		dispatch(fetchAsyncSearch(term))
	}
	const items = useSelector(state => state.search.items)
	const inputClickHandler = () => {
		setIsOpen(true)
	}
	const itemClickHandler = () => {
		setIsOpen(!isOpen)
	}
	const filteredProducts = items.filter(item => {
		return item.title.toLowerCase().includes(term.toLowerCase())
	})

	return (
		<header className={s.header}>
			<div className={s.header_main}>
				<Logo />
				<div className={s.search}>
					<form>
						<input
							className='w-[400px] bg-[#3d4f68] px-3 py-2 text-white border-[#7c7d80] border-2 rounded-2xl  focus:border-[#ff9900] focus:rounded-b-none'
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
									? 'absolute top-11.4 border-[#ff9900] border-2 rounded-b-2xl border-t-0 max-h-96 h-auto overflow-auto left-0 bg-[#3d4f68] text-white w-[400px] z-10 p-4'
									: 'opacity-100'
							}
						>
							<ul>
								{items.map(item => (
									<Link legacyBehavior href={`/product/${item.id}`}>
										<li className='mb-3' onClick={itemClickHandler}>
											{item.title}
										</li>
									</Link>
								))}
							</ul>
						</div>
					) : null}
				</div>
				<Actions />
			</div>
		</header>
	)
}

export default Header
