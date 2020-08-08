class FootBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div
            class="footer d-flex justify-content-center align-items-center bg-success w-100"
            style="height: 70px;">
            <p class="text-white">
                Copyright 2020. I-Cov design by
                <a class="text-dark" href="https://tupipetualang.github.io">Arubaya</a>
            </p>
        </div>`;
    }
}

customElements.define("foot-bar", FootBar);