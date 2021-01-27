
const d = document;

export default function enlacesVendidos (item1, item2, item3) {




    d.addEventListener("click", e => {
        if (e.target.matches(item1) || e.target.matches(item2) || e.target.matches(item3)){
            location.href = "/articulos.html"


          
        }
    })

    
}