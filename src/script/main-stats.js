const mainStats = () => {
    const urlIndo = "https://api.kawalcorona.com/indonesia/provinsi/";

    // Get data stats Provinsi from API
    const getIndoProvinsi = () => {
        fetch(`${urlIndo}`)
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            if(responseJSON.error){
                showResponseMessage(responseJSON.message);
            } else {
                renderStatsProvinsi(responseJSON);
            }
        })
        .catch(error => {
            showResponseMessage(error)
        })
    }

    // Render error response message
    const showResponseMessage = (message = "Periksa Koneksi") => {
        alert(message);
    };

    // Render Search Stats Provinsi to HTML
    const renderStatsProvinsi = stats => {
        const renderResult = $(".result");    
        const btnSearch = $(".btn-search"); 
        const listOption = $(".search-input");
        stats.forEach(provinsi => {
            listOption.innerHTML += `<option value="${provinsi.attributes.Provinsi}">${provinsi.attributes.Provinsi}</option>`;
        })       

        btnSearch.click(() => {
            const inputFilter = listOption.value;
            stats.forEach(provinsi => {
                if (provinsi.attributes.Provinsi == inputFilter) {
                    renderResult.html(`
                    <h3 class="display-4 font-weight-bold text-dark">Statistik di ${provinsi.attributes.Provinsi}</h3>
                    <div class="container-stats d-flex">
                        <div class="card-columns">
                            <div
                            class="card-body container-result bg-warning rounded-lg text-dark"
                            id="indo-positif">
                                <h5 class="card-tittle result-number">${numberSplitDot(provinsi.attributes.Kasus_Posi)}</h5>
                                <p class="card-text result-desc">Positif</p>
                            </div>
                            <div
                            class="card-body container-result bg-success rounded-lg text-white"
                            id="indo-sembuh">
                                <h5 class="card-tittle result-number">${numberSplitDot(provinsi.attributes.Kasus_Semb)}</h5>
                                <p class="card-text result-desc">Sembuh</p>
                            </div>
                            <div
                            class="card-body container-result bg-danger rounded-lg text-white"
                            id="indo-mati">
                                <h5 class="card-tittle result-number">${numberSplitDot(provinsi.attributes.Kasus_Meni)}</h5>
                                <p class="card-text result-desc">Meninggal</p>
                            </div>
                        </div>
                    </div>
                    `)
                };
            })
        })
    }

    const numberSplitDot = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    document.addEventListener("DOMContentLoaded", () => {      
        getIndoProvinsi();
               
    });
}
mainStats();
