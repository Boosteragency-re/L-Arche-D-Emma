class Prestations {

    constructor(data) {
       this.toilettage = data.toilettage;
       this.court = data.court;
       this.long = data.long;
    }

    display() {
        this.displayAll(this.toilettage, "toilettage")
        this.displayAll(this.court, "court")
        this.displayAll(this.long, "long")
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
        <div class="prestations--prev prestations__loader--${el.number}">
            <div class="prestations--container">
                <div class="prestations--text">
                    <p class="prestations--bold">${el.type}</p>
                    <div class="prestations--wrapper">
                        <p class="prestations--light" data-toggle="collapse" data-target="#${el.id}">Plus de détails <i class="fa-solid fa-angle-down down"></i></p>
                        <div class="collapse" id="${el.id}">
                            <p class="prestations--details">
                            ${el.taille}. <br>
                            ${el.exemple} <br>
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