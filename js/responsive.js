export default function responsiveQueries (id1, id2,  mq, classHidden) {

    const d = document,
    w = window;

    let breakpoint = w.matchMedia(mq);

    const responsive = e => {

        if (e.matches) {
            d.getElementById(id1).classList.remove(classHidden)
            d.getElementById(id2).classList.remove(classHidden)
        } else {
            d.getElementById(id1).classList.add(classHidden)
            d.getElementById(id2).classList.add(classHidden)
        }

    }

    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);


}