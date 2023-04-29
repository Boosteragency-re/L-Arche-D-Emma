class Prestations {

    constructor(data) {
       this.bain = data.bain;
       this.tonte = data.tonte;
       this.coupe = data.coupe;
    }

    display() {
        this.displayAll(this.bain, "bain")
        this.displayAll(this.tonte, "tonte")
        this.displayAll(this.coupe, "coupe")
    }

    displayAll(el, item) {
        let html = "";
        el.forEach(item => {
            html += this.renderPrestations(item);
        });
        document.getElementById(`prestations--${item}`).innerHTML = html;
    }

    renderPrestations(el) {
        let extras = ""
        el.extra.forEach(item => {
            extras += item
        })
        return  `
        <div class="prestations--prev prestations__loader">
            <div class="prestations--container">
                <div class="prestations--text">
                    <p class="prestations--bold">${el.race}</p>
                    <div class="prestations--wrapper">
                        <p class="prestations--light" data-toggle="collapse" data-target="#${el.id}">Plus de détails <i class="fa-solid fa-angle-down down"></i></p>
                        <div class="collapse" id="${el.id}">
                            <p class="prestations--details">
                            ${el.soins} <br>
                            </p>
                            <p class="prestations--details">${extras}</p>
                        </div>
                    </div>
                </div>
                <div class="prestations--price">${el.prix}</div>
                <div class="prestations--check">
                    <a target="_blank" rel="noopener noreferrer" href="https://tapstyle.net/booking/larchedemma"><i class="fas fa-check-circle check"></i></a>
                </div>
            </div>   
        </div>
        `
    }

}
export default Prestations