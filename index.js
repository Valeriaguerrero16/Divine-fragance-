const perfumeBrands = [
    "Chanel",
    "Dior",
    "Gucci",
    "Versace",
    "Calvin Klein",
    "Yves Saint Laurent",
    "Tom Ford",
    "Burberry",
    "Hugo Boss",
    "Armani",
    "Dolce & Gabbana",
    "Givenchy",
    "Lancome",
    "Jo Malone",
    "Carolina Herrera",
    "Paco Rabanne",
    "Victoria Secret",
    "Jean Paul Gaultier",
    "Prada",
    "Hermès"
];


const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');


searchInput.addEventListener('focus', function() {
    filterBrands(searchInput.value);
});

searchInput.addEventListener('input', function() {
    filterBrands(searchInput.value);
});


function filterBrands(query) {
    query = query.toLowerCase(); 
    resultsList.innerHTML = ''; 

 
    const filteredBrands = perfumeBrands.filter(brand => brand.toLowerCase().includes(query));


    if (filteredBrands.length > 0) {
        resultsList.style.display = 'block'; 
        filteredBrands.forEach(brand => {
            const li = document.createElement('li');
            li.textContent = brand;
            li.addEventListener('click', function() {
                searchInput.value = brand; 
                resultsList.style.display = 'none'; 
            });
            resultsList.appendChild(li); 
        });
    } else {
        resultsList.style.display = 'none'; 
    }
}

document.addEventListener('click', function(event) {
    if (!searchInput.contains(event.target) && !resultsList.contains(event.target)) {
        resultsList.style.display = 'none';
    }
});
