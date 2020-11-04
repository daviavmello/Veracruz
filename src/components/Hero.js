import React from 'react'
import { Image } from 'bumbag'

const Hero = () => (
	<div>
		<Image src={`/img/promo.jpg`} fit='cover' alt='Hero Cover' height='47rem' width='100%' marginBottom='4rem' display={{ default: 'flex', 'max-tablet': 'none'}} />
        <Image src={`/img/promo-mobile.jpg`} fit='cover' alt='Hero Cover' height='30rem' width='100%' marginBottom='4rem' display={{ default: 'none', 'max-tablet': 'flex'}} />
	</div>
)

export default Hero
