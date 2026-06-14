// Expresiones
export const rectPerimeter = (x, y) => (x + y) * 2;
export const rectArea = (x, y) => x * y;
export const triArea = (x, y) => (x * y)/2;
export const ringArea = (x, y) => (Math.PI * (y **2)) - (Math.PI * (x **2));
export const f2c = (f) => (f - 32) / 1.8;
export const c2f = (c) => (1.8 * c) + 32;

// Strings
//export const makeName = (name, lastName) => `${lastName}, ${name}`;
export const makeName = (name, lastName) => lastName + ", " + name;
export const ellide = (phrase, limitChars) => `${phrase.substring(0, limitChars)}...`

//Conditionals
export const longer = (num1, num2) => num1.length >= num2.length ? num1 : num2;
export const mid3 = (a, b, c) => {
    
    if(a > b){
        if(a > c){
            if(b > c){
                return b;
            } else {
                return c;
            }
        } else {
            return a;
        }
    } else if(b > c){
        if(a > c){
            return a;
        } else {
            return c;
        }
    } else {
        return b;
    }

}
export const lastFirst = (nameObj) => {
    
    if (nameObj.first == null){
        if(nameObj.last == null){
            return '';
        } else {
            return nameObj.last;
        }
    } else if(nameObj.first != null){
        if(nameObj.last != null){
            return nameObj.last + ', ' + nameObj.first;
        } else {
            return nameObj.first;
        }
    } 
    

    /*
    if(nameObj.first == null && nameObj.last == null){
        return '';
    } else if(nameObj.first != null && nameObj.last != null){
        return `${nameObj.last}, ${nameObj.first}`;
    } else if(nameObj.first == null && nameObj.last != null){
        return nameObj.last;
    }else if(nameObj.first != null && nameObj.last == null){
        return nameObj.first;
    }
    */
}

// Arrays
export const subArray = (chain, indexes) => {
    return indexes.map(indexes => chain[indexes]);
}
export const over21 = (peopleObjs) => peopleObjs.filter((person) => person.age >= 21);
export const product = (numberArr) => numberArr.reduce((arrNumber, n) => arrNumber * n, 1);
export const getRepeats = (numberReps) => numberReps.filter((index, n) => numberReps.indexOf(index) === n && numberReps.lastIndexOf(index) != n);

// DOM Operations
export const moduleTitles = () => {
  const elementos = document.querySelectorAll(".module-title");

  const titulos = [];

  for (const elemento of elementos) {
    titulos.push(elemento.textContent.trim());
  }

  return titulos;
}
export const goPurple = () => {
    const titulosEjs = document.querySelectorAll(".exercise-name");
    const tituloPur = Array.from(titulosEjs).find(el => el.textContent.trim() == "goPurple");

    if(tituloPur){
        tituloPur.style.color = "white";
        tituloPur.style.background = "purple";
        return "Go Purple!"
    }

}
export const copycat = (n) => {
    const filas = Array.from(document.querySelectorAll(".test-result"));

    const fila = filas.find(f =>
        f.children[0].textContent.trim() === `copycat(${n})`
    );

    return eval(fila.children[1].textContent);
}