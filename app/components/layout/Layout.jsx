import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import s from './Layout.module.scss'
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
