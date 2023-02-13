import React, { useState } from 'react'
import s from './Header.module.scss'
import Logo from './logo/Logo'
import Actions from './actions/Actions'
import Search from './search/Search'

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.header_main}>
				<Logo />
				<Search />
				<Actions />
			</div>
		</header>
	)
}

export default Header
