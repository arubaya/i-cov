import "jquery";
function main() {
    const urlGlobal = "https://api.covid19api.com/summary";
    const urlNews = "https://api.smartable.ai/coronavirus/news/global?Subscription-Key=3009d4ccc29e4808af1ccc25c69b4d5d";

    // Get data for stats Global and Indonesia from API
    const getGlobalStats = () => {
        fetch(`${urlGlobal}`)
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            if(responseJSON.error){
                showResponseMessage(responseJSON.message);
            } else {
                renderStatsGlobal(responseJSON.Global);
                renderStatsIndo(responseJSON.Countries);
            }
        })
        .catch(error => {
            showResponseMessage(error)
        })
    }

    // Get data for news Global
    const getNews = () => {
        fetch(`${urlNews}`)
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            if(responseJSON.error){
                showResponseMessage(responseJSON.message);
            } else {
                renderNews(responseJSON.news);
            }
        })
        .catch(error => {
            showResponseMessage(error)
        })
    }

    // Render data Global to HTML 
    const renderStatsGlobal = stats => {
        const kasus = $("#global-kasus");
        const sembuh = $("#global-sembuh");
        const mati = $("#global-mati");
        
        kasus.html(`
            <h5 class="card-tittle result-number">${numberSplitDot(stats.TotalConfirmed)}</h5>
            <p class="card-text result-desc">Kasus</p>
        `);
        sembuh.html (`
            <h5 class="card-tittle result-number">${numberSplitDot(stats.TotalRecovered)}</h5>
            <p class="card-text result-desc">Sembuh</p>
        `);
        mati.html(`
            <h5 class="card-tittle result-number">${numberSplitDot(stats.TotalDeaths)}</h5>
            <p class="card-text result-desc">Meninggal</p>
        `);
    }

    // Render data Indonesia to HTML
    const renderStatsIndo = (stats) => {
        const positif = $("#indo-positif");
        const sembuh = $("#indo-sembuh");
        const mati = $("#indo-mati");
        stats.forEach(country => {
            if (country.CountryCode == "ID"){
                positif.html(`
                    <h5 class="card-tittle result-number">${numberSplitDot(country.TotalConfirmed)}</h5>
                    <p class="card-text result-desc">Positif</p>
                `);
                sembuh.html(`
                    <h5 class="card-tittle result-number">${numberSplitDot(country.TotalRecovered)}</h5>
                    <p class="card-text result-desc">Sembuh</p>
                `);
                mati.html(`
                    <h5 class="card-tittle result-number">${numberSplitDot(country.TotalDeaths)}</h5>
                    <p class="card-text result-desc">Meninggal</p>
                `);
            }
        });
                
    }

    // Render error response message
    const showResponseMessage = (message = "Periksa Koneksi") => {
        alert(message);
    };

    // Render data news to HTML
    const renderNews = (newsData) => {
        const newsElement = document.querySelector("#news-card");
        newsData.forEach(newsList => {
            newsElement.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${newsList.title}</h5>
                    <p class="card-text" style="color: #707070;">${newsList.excerpt}</p>
                    <a class="btn btn-success" id="btnNewTab" href="${newsList.webUrl}">lanjut baca</a>
                </div>
            </div>
            `;
        });

    }
      
    // Button click into stats
    const btnScrollToStats = () => {
        const btnScrollGlobal = $("#btnStatsGlobal");
        btnScrollGlobal.click(() => {
            document.body.scrollTop = 612; // For Safari
            document.documentElement.scrollTop = 612; // For Chrome, Firefox, IE and Opera
        });

        const btnScrollIndo = $("#btnStatsIndo");
        btnScrollIndo.click(() => {
            document.body.scrollTop = 1112; // For Safari
            document.documentElement.scrollTop = 1112; // For Chrome, Firefox, IE and Opera
        });
    }

    // Function for split number data with dot
    const numberSplitDot = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    document.addEventListener("DOMContentLoaded", () => {      
        getGlobalStats();
        getNews();
        btnScrollToStats();        
    });
    
}
main();