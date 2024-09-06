
function search(){

    let digit = document.getElementById("digit").value;
    let searchResultsContainer = document.getElementById('searchResults');
    let results = "";
    let title = "";
    let description = "";
    let history = [];
    digit = digit.toLowerCase();
    
    if(!digit){
        searchResultsContainer.innerHTML = `<div class="separate-line"></div>
                <div class="box-results"><h3>Nada foi encontrado. Digite algo relacionado</h3><div> `;
        return
    };

    for (let tower of towers){
        
        title = tower.title.toLowerCase();
        description = tower.description.toLowerCase();


        if (title.includes(digit) || description.includes(digit)){
        results += `
            <div class="separate-line"></div>
                <div class="search-results" >
                <div class="box-results">
                    <h2>${tower.title}</h2>
                    <img src=${tower.img} alt=${tower.imgAlt}>
                    <p>Descrição: ${tower.description}</p>
                    <p>Habilidades: ${tower.abilities}</p>
                    <p>Vantagens: ${tower.advantage}</p>
                    <p>Sugestão: ${tower.suggestion}</p>
                    </div>                
                </div>`
            };       
        }
        if(!results){
            results = `
                <div class="separate-line"></div>
                <div class="search-results">
                    <h3>Nada foi encontrado</h3><div>`
    };

searchResultsContainer.innerHTML = results;
};

