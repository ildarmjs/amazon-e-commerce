import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
	return (
		<div className='grid grid-cols-4 gap-3 mb-5'>
			<div className='grid col-span-3 '>
				<Link legacyBehavior href={'/laptops'}>
					<div className='relative w-[1206.75px] h-[400px] cursor-pointer'>
						<Image
							className='grayscale duration-500 hover:grayscale-0 '
							src='/images/laptop.jpg'
							alt='Laptop'
							layout='fill'
							objectFit='cover'
						/>
						{/* <span>Ноутбуки</span> */}
					</div>
				</Link>
			</div>
			<div className='grid row-span-2'>
				<Link legacyBehavior href={'/fragrances'}>
					<div className='relative w-[400px] h-[810px]  cursor-pointer'>
						<Image
							className='grayscale duration-500 hover:grayscale-0 '
							src='/images/parfume.jpg'
							alt='Laptop'
							layout='fill'
							objectFit='cover'
						/>
						{/* <span>Ноутбуки</span> */}
					</div>
				</Link>
			</div>
			<div className='grid col-span-1'>
				<Link legacyBehavior href={'/all-products'}>
					<div className='relative w-[395px] h-[400px]  cursor-pointer'>
						<Image
							className='grayscale duration-500 hover:grayscale-0 '
							src='/images/sale.jpg'
							alt='Laptop'
							layout='fill'
							objectFit='cover'
						/>
						{/* <span>Ноутбуки</span> */}
					</div>
				</Link>
			</div>

			<div className='grid col-span-2'>
				<Link legacyBehavior href={'/smartphones'}>
					<div className='relative w-[800.5px] h-[400px]  cursor-pointer'>
						<Image
							className='grayscale duration-500 hover:grayscale-0 '
							src='/images/smartphone.jpg'
							alt='smartphone'
							layout='fill'
							objectFit='cover'
						/>
						{/* <span>Ноутбуки</span> */}
					</div>
				</Link>
			</div>
			<div className='grid col-span-4'>
				<Link legacyBehavior href={'/skincare'}>
					<div className='relative w-[1613px] h-[300px]  cursor-pointer'>
						<Image
							className='grayscale duration-500 hover:grayscale-0 '
							src='/images/cream.jpg'
							alt='smartphone'
							layout='fill'
							objectFit='cover'
						/>
						{/* <span>Ноутбуки</span> */}
					</div>
				</Link>
			</div>
		</div>
	)
}

export default HomePage
