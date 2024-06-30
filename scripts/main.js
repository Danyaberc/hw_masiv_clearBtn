// Model
let nameUser = document.querySelector('.nameUser')
let btnAdd = document.querySelector('.btn_add')
let checkName = document.querySelector('.checkname')
let clearUser = document.querySelector('.clear_user')

//Option
let arrStud = []


//ctrl+view

let render = () =>{
    checkName.innerHTML = '';

    arrStud.forEach((item)=>{
       checkName.insertAdjacentHTML('beforeend', `<div>${item}</div>`);

    })
}


btnAdd.addEventListener('click', (ev)=>{
    ev.preventDefault();

    let value = nameUser.value;
    
    
    if(value.trim() === ''){
        return
    }
    arrStud.push(value)
        render()
    console.log(value)
    console.log('arrStud',arrStud)
})

clearUser.addEventListener('click',(ev) =>{
    checkName.innerHTML = '';
    arrStud.length = 0;

})


//runner
  

//1.Треба знайти інпут і отримати його дані
//2.Отримані дані ми закидуємо по кліку add, в масив
//3.Отримані дані в масиві треба додавати,
//кожен раз коли натискають додати в блок дів 
//4.По натисканню на кнопку clear ,треба очистити масив
