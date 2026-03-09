

const addNumberToLS = () => {

    const number = Math.floor(Math.random() * 100)
    
    localStorage.setItem("number" , number)
    
    console.log(number);
}

const getNumberToLs = () => {

    const number = localStorage.getItem("number")

    console.log( 'get form local storage' ,number);
    
}



const addObjectToLS = () => {

    const obj = { name : 'taj' , country : "bangladesh"}

    // const obj2 = JSON.stringify(obj);

    localStorage.setItem("obj" , JSON.stringify(obj))
}

const getObjectToLS = () => {

    const obj = localStorage.getItem('obj')

    // const obj2 =JSON.parse(obj)
    
    console.log("obj get :" , JSON.parse(obj));
    
}