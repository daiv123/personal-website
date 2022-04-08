import { useEffect } from "react";

export default function AdSquare() {
	useEffect(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	});

	return (
		<ins className='adsbygoogle'
			style={{ display: 'block' }}
			data-ad-client='ca-pub-12121212'
      data-adtest="on"
			data-ad-slot='12121212'
			data-ad-format='auto' />
		
	);
}