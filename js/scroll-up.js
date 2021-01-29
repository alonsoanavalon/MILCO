
const d = document;
const w = window;

export default function btnScroll (btnScroll) {

    let $btn = d.querySelector(btnScroll);
    let scrollTop;

    w.addEventListener("scroll", e => {

        scrollTop = w.pageYOffset || d.documentElement.scrollTop;

     /*    console.log(scrollTop) */
        
        if(scrollTop > 1000) {
           
            $btn.classList.remove("hidden")
        } else {
            $btn.classList.add("hidden")
        }

    })
    
    console.log($btn)
    console.log($btn.firstChild)


    d.addEventListener("click", e => {
        if (e.target == $btn || e.target == $btn.firstChild){

    

            w.scrollTo({
                behavior:"smooth",
                top:0,
            })

        }
    })

}
