const DEFAULT_NAME = 'Gregorio';

class WavHeader extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.name = this.getAttribute('name') ?? DEFAULT_NAME;
		this.render();
	}

	render() {
		this.innerHTML = `
    <header>
      <img
        class='header'
        src="https://img.freepik.com/foto-gratis/cerrar-lindo-gato-interior_23-2148882585.jpg"
        alt="Imagen del Header" />

      <h1 
        class='title'
        >
        Hola, ${this.name}
      </h1>
    </header>
    `;
	}
}

customElements.define('wav-header', WavHeader);
