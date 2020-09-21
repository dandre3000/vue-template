import './assets/style.css' // extract css

window.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('noscript').forEach(e => {
		e.remove()
	})
	
	const h1 = document.createElement('h1')
	h1.innerText = 'Javascript is enabled'
	document.getElementById('js').appendChild(h1)
})