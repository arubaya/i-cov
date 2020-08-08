import img from "../../assets/Group 14.png";
class AppBar extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container" id="navbarContainer">
            <nav class="navbar bg-white navbar-expand-lg navbar-light fixed-top">
            <a
                class="navbar-brand"
                href="#"
                style="color: green; font-weight: 600; font-size: 30px;">
                <img src="${img}" style="width: 20%;" />
                I-Cov
            </a>
            <button
                class="navbar-toggler border-0"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto" style="color: green;">
                <a class="nav-item nav-link" href="index.html">Beranda</a>
                <a class="nav-item nav-link" href="informasi.html">Informasi</a>
                <a class="nav-item nav-link" href="statistik.html">Statistik</a>
                <a class="nav-item nav-link" href="tentang.html">Tentang Kami</a>
                </div>
            </div>
            </nav>
        </div>`;
    }
}

customElements.define("app-bar", AppBar);