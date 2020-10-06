import React from 'react'
import PopupOmOssHeader from './PopupOmOssHeader'
import PopupOppettiderHeader from './PopupOppettiderHeader'
import PopupHittaHitHeader from './PopupHittaHitHeader'
import PopupKontaktHeader from './PopupKontaktHeader'

export default function Header() {
	return (
		<div>
			<div className="headerDiv"> 
				<p><PopupOmOssHeader /></p>
				<p><PopupOppettiderHeader /></p>
				<p><PopupHittaHitHeader /></p>
				<p><PopupKontaktHeader /></p>
			</div>
		</div>
	)
}
