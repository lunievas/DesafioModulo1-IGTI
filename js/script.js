const search = document.querySelector('#search');
const submit = document.querySelector('#submit');

const usersTitle = document.querySelector('#usersTitle');
const usersFiltred =  document.querySelector('#usersFiltred');

const statisticsTitle =  document.querySelector('#statisticsTitle');
const statisticsFiltred =  document.querySelector('#statisticsFiltred');



async function fetchUsers(){
    const res = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');
    const json = await res.json();

    const allUsers = json.results.map((user) =>{
        const {picture, name, dob, gender} = user;

        return{
            picture: picture.medium,
            name: `${name.first} ${name.last}`,
            age: dob.age,
            gender,
        };
    });
    console.log(allUsers);
    return allUsers;
};

function filterUsers(results, indice){
    const users = results.filter((person)=>{
        return person.name.toLowersCase().includes(indice.toLowersCase());
    });
    return users;
}
