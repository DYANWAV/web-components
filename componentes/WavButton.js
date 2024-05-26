class WavButton extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = '<button>Click Aquí</button';
	}
}

customElements.define('wav-button', WavButton);
