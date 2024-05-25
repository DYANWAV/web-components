import './componentes/WavHeader.js';

class HolaMundo extends HTMLElement {
	connectedCallback() {
		this.innerHTML = '<h1>Hola Mundo</h1>';
	}
}

customElements.define('hola-mundo', HolaMundo);
