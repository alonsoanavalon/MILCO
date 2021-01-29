export default function darkMode (btn, body , darkClass) {
    const d = document;
    let $body = d.querySelector(body)

  
    



    
        d.addEventListener("click", e => {
            let $btn = d.querySelector(btn)

            console.log($btn)
            console.log($btn.firstChild)

            if (e.target == $btn || e.target == $btn.firstChild) {

           
                if ($btn.childNodes[0].classList.value == 'far fa-moon') {
                    $btn.childNodes[0].classList.value = 'far fa-sun'
                    $body.classList.add(darkClass)
                } else  if ($btn.childNodes[0].classList.value == 'far fa-sun') {
                    $btn.childNodes[0].classList.value = 'far fa-moon'
                    $body.classList.remove(darkClass)
                }
            }


                 
       

          
                 
          
           
        })
   
    
}


