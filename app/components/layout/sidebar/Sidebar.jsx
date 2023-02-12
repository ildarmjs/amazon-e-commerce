import React from 'react'
import Link from 'next/link'
import s from './Sidebar.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router'
const Sidebar = () => {
	const { asPath } = useRouter()
	return (
		<aside className={s.aside}>
			<ul className={s.list}>
				<li
					className={cn({
						[s.active]: asPath === '/',
					})}
				>
					<Link legacyBehavior href={'/'}>
						<a className={s.link}>Главная</a>
					</Link>
				</li>

				<li
					className={cn({
						[s.active]: asPath === '/all-products',
					})}
				>
					<Link legacyBehavior href={'/all-products'}>
						<a className={s.link}>Все товары</a>
					</Link>
				</li>
				<li
					className={cn({
						[s.active]: asPath === '/smartphones',
					})}
				>
					<Link legacyBehavior href={'/smartphones'}>
						<a className={s.link}>Смартфоны</a>
					</Link>
				</li>
				<li
					className={cn({
						[s.active]: asPath === '/laptops',
					})}
				>
					<Link legacyBehavior href={'/laptops'}>
						<a className={s.link}>Ноутбуки</a>
					</Link>
				</li>
				<li
					className={cn({
						[s.active]: asPath === '/fragrances',
					})}
				>
					<Link legacyBehavior href={'/fragrances'}>
						<a className={s.link}>Парфюмерия</a>
					</Link>
				</li>
				<li
					className={cn({
						[s.active]: asPath === 'skincare',
					})}
				>
					<Link legacyBehavior href={'/skincare'}>
						<a className={s.link}>Для ухода за кожей</a>
					</Link>
				</li>
			</ul>
		</aside>
	)
}

export default Sidebar
