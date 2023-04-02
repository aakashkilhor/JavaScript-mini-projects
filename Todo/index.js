// const toDoList = ['elo','bye','whddhhdh'];
// localStorage.setItem('list',JSON.stringify([]))
// const ourList = [];





let input = document.querySelector('.input');
const addButton = document.querySelector('.addButton');
const container = document.querySelector('.container');




const elementCreate = ()=>{
   
        let item = document.createElement('div');
    item.className = 'item';
    item.style.display = 'flex';
    let itemInput = document.createElement('div');
    itemInput.className = 'item_input';
    itemInput.innerHTML = input.value;
    item.append(itemInput);
    container.append(item)
    
    // editButton 
    let editButton = document.createElement('button');
    editButton.innerHTML = 'EDIT';
    editButton.className = 'editButton';
    item.append(editButton);

    // doneButton
    let doneButton = document.createElement('button');
    doneButton.innerHTML = 'DONE';
    doneButton.style.color = '#1C8D73';
    doneButton.style.fontSize = '1.4rem';
    doneButton.style.background = 'transparent';
    doneButton.style.border = 'none';
    doneButton.style.display = 'none';
    doneButton.style.fontFamily = 'Bebas Neue, cursive';
    item.append(doneButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'DELETE';
    deleteButton.className = 'deleteButton';
    item.append(deleteButton);





    let temp = itemInput.innerText;
    let storedList = JSON.parse(localStorage.getItem('list'));
    // console.log('my one ',storedList.indexOf(temp))
    let index = storedList.indexOf(temp);


    editButton.addEventListener('click',(e)=>{
        itemInput.contentEditable = true;
        editButton.style.display = 'none';
        doneButton.style.display = 'block';
    })

    doneButton.addEventListener('click',()=>{
        itemInput.contentEditable = false;
        editButton.style.display = 'block';
        doneButton.style.display = 'none';
        // console.log(temp)

        storedList.splice(index,1,itemInput.innerText);
            // console.log('new list', storedList)
        localStorage.setItem('list',JSON.stringify(storedList));
        
    })

    deleteButton.addEventListener('click',()=>{
        container.removeChild(item)
        // console.log(storedList)
        storedList.splice(index,1);
        localStorage.setItem('list',JSON.stringify(storedList))
    })
}

// for rendering list on add click 
const renderToDo = ()=>{

    // elementCreate();

let list = localStorage.getItem('list')
let ourList = JSON.parse(list)
console.log(list)
// foreach code 
   ourList && ourList.forEach((e, index, arr)=>{
    let item = document.createElement('div');
    item.className = 'item';
    item.style.display = 'flex';
    let itemInput = document.createElement('div');
    itemInput.className = 'item_input';
    itemInput.innerHTML = e;
    item.append(itemInput);
    container.append(item)

    
  // editButton 
    let editButton = document.createElement('button');
    editButton.innerHTML = 'EDIT';
    editButton.className = 'editButton';
    item.append(editButton);

    //  doneButton
    let doneButton = document.createElement('button');
    doneButton.innerHTML = 'DONE';
    doneButton.style.color = '#1C8D73';
    doneButton.style.fontSize = '1.4rem';
    doneButton.style.background = 'transparent';
    doneButton.style.border = 'none';
    doneButton.style.display = 'none';
    doneButton.style.fontFamily = 'Bebas Neue, cursive';
    item.append(doneButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'DELETE';
    deleteButton.className = 'deleteButton';
    item.append(deleteButton)


    editButton.addEventListener('click',()=>{
        itemInput.contentEditable = true;
        editButton.style.display = 'none';
        doneButton.style.display = 'block';
    })

    doneButton.addEventListener('click',()=>{
        itemInput.contentEditable = false;
        arr[index] = itemInput.innerText;
        // console.log('this is e',arr)
        localStorage.setItem('list',JSON.stringify(arr));
        let b = localStorage.getItem('list')
        console.log(b)
        editButton.style.display = 'block';
        doneButton.style.display = 'none';

    })

    deleteButton.addEventListener('click',()=>{
        container.removeChild(item)
        let storedList = JSON.parse(localStorage.getItem('list'));
        // console.log(storedList)
        storedList.splice(index,1);
        localStorage.setItem('list',JSON.stringify(storedList))
    })


    })

}

// add list handler 
const addHandler = ()=>{

    if(localStorage.length == 0){
        localStorage.setItem('list', JSON.stringify([]))
    }

    
if(input.value!==''){
 
   
    let storedList = JSON.parse(localStorage.getItem('list'));
    storedList.push(input.value);
    // console.log(storedList)
    localStorage.setItem('list', JSON.stringify(storedList))
    elementCreate()
    input.value = '';

}
}

addButton.addEventListener('click',addHandler)



renderToDo()