import React from 'react'
import s from './Layout.module.scss'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
const Layout = ({ children }) => {
	return (
		<div className={s.layout}>
			<Header />

			<div className={s.sidebar}>
				<Sidebar />
			</div>

			<div className={s.content}>{children}</div>
		</div>
	)
}

export default Layout
