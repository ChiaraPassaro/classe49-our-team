// Abbiamo un array di oggetti che rappresentano i membro del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.

//   BONUS:
// Utilizziamo gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall’utente.

//Dati
const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// const arrMult = [
//   ['giorgia', 'arturo'],
//   ['filippo', 'maria']
// ];

// for (let index = 0; index < arrMult.length; index++) {
//   const names = arrMult[index];
//   for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     console.log(name);
//     if (name == 'giorgia') {
//       console.log('Trovata');
//     }
//   }
// }

// template card
// <div class="team-card">
//   <div class="card-image">
//     <img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett" />
//   </div>
//   <div class="card-text">
//     <h3>Wayne Barnett</h3>
//     <p>Founder & CEO</p>
//   </div>
// </div>

//functions
function templateCard(obj) {
  const template = `
    <div class="team-card">
      <div class="card-image">
        <img src="img/${obj.image}" alt="${obj.name}" />
      </div>
      <div class="card-text">
        <h3>${obj.name}</h3>
        <p>${obj.role}</p>
      </div>
    </div>
  `;

  return template
}

const container = document.querySelector('.team-container');

for (let index = 0; index < team.length; index++) {
  const member = team[index]; //obj 
  const template = `
    <div class="team-card">
      <div class="card-image">
        <img src="img/${member.image}" alt="${member.name}" />
      </div>
      <div class="card-text">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      </div>
    </div>
  `;

  container.innerHTML += template;
}

const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputImage = document.getElementById('image');
const button = document.getElementById('addMemberButton');

button.addEventListener('click', function () {
  const name = inputName.value;
  const role = inputRole.value;
  const image = inputImage.value;

  const obj = {
    name: name,
    role: role,
    image: image
  }

  team.push(obj);

  const template = `
    <div class="team-card">
      <div class="card-image">
        <img src="img/${obj.image}" alt="${obj.name}" />
      </div>
      <div class="card-text">
        <h3>${obj.name}</h3>
        <p>${obj.role}</p>
      </div>
    </div>
  `;

  container.innerHTML += template;
  console.log(obj);
});


//Funzioni


//Init