import React from 'react'
import s from './Header.module.scss'
import Logo from './logo/Logo'
import Actions from './actions/Actions'

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.header_main}>
				<Logo />
				<Actions />
			</div>
		</header>
	)
}

export default Header
