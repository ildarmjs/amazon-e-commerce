import Container from '@/app/components/container/Container'
import Favorites from '@/app/components/screens/favorites/Favorites'
import Meta from '@/app/uttils/Meta'
import React from 'react'

const favorites = () => {
	return (
		<>
			<Meta title='Избранное' />
			<h1 className='pt-5 text-[30px] font-bold mb-8'>Избранное</h1>
			<Container>
				<Favorites />
			</Container>
		</>
	)
}

export default favorites
