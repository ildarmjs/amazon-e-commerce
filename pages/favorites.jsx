import Container from '@/app/components/container/Container'
import Favorites from '@/app/components/screens/favorites/Favorites'
import Meta from '@/app/uttils/Meta'
import React from 'react'

const favorites = () => {
	return (
		<>
			<Meta title='Избранное' />
			<Container>
				<Favorites />
			</Container>
		</>
	)
}

export default favorites
