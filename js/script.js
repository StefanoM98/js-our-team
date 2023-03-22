// CREIAMO L'ARREY DEL TEAM

const team = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        lavoro: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela",
        cognome: "Caroll",
        lavoro: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter",
        cognome: "Gordon",
        lavoro: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela",
        cognome: "Lopez",
        lavoro: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott",
        cognome: "Estrada",
        lavoro: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara",
        cognome: "Ramos",
        lavoro: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
]

const cardRow = document.querySelector(".row");

let cards = ""
for (let i = 0; i < team.length; i++) {
    const myTeam = team[i];
    cards += `
    <div class="col p-4">
        <div class="card">
            <img src="img/${myTeam.foto}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-text text-center">${myTeam.nome} ${myTeam.cognome}</h5>
                <p class="card-text text-center">${myTeam.lavoro}</p>
            </div>
        </div>
    </div>
    `;
}
cardRow.innerHTML = cards