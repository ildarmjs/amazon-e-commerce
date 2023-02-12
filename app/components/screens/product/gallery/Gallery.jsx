import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import s from './Gallery.module.scss'
import cn from 'classnames'
const Gallery = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	return (
		<div className={s.gallery}>
			<div className={s.gallery__image}>
				<Image
					className={cn(s.image, s.main)}
					src={images[currentIndex]}
					alt={'1'}
					layout='fill'
					objectFit='contain'
				/>
			</div>
			<div className={s.list}>
				{images.map((image, index) => (
					<button
						className={cn(s.item, {
							[s.active]: index === currentIndex,
						})}
					>
						<div className={s.list__image}>
							<Image
								onClick={() => setCurrentIndex(index)}
								className={s.image}
								src={image}
								layout='fill'
								objectFit='contain'
							/>
						</div>
					</button>
				))}
			</div>
		</div>
	)
}

export default Gallery
