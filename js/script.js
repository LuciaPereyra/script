const arrayDeInts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
const newArray = [];
const button = document.getElementById('submit')
const input = document.getElementById('number')
const labelResult = document.getElementById('labelResult')
const lista = document.getElementById('lista')
let click = false;

const incluyeNum = (numComprobar, numCalcular) => `${numCalcular}`.includes(`${numComprobar}`)

const divisiblePorNum = (num, numeroCalcular) => {
    if(num % numeroCalcular === 0) return true
    else return false
}

const recibeArrayDevuelveArrayString = arrayInts => {
    arrayInts.map(num => {
        if(divisiblePorNum(num, 3) && divisiblePorNum(num, 5)) {
            newArray.push({num, result: 'FizzBuzz'})
        }else{
            if(divisiblePorNum(num, 3) || incluyeNum(num, 3)){
                newArray.push({num, result: 'Fizz'})
            } else {
                if(divisiblePorNum(num, 5) || incluyeNum(num, 5)){
                    newArray.push({num, result: 'Buzz'})
                }
            }
        }

    })

}

button.onclick = function () {
    if(!click){
        lista.style.display= 'block'
        button.innerHTML= 'Ocultar la lista'
    }else{
        lista.style.display= 'none'
        button.innerHTML= 'Consulta la lista'
    }
    click = !click;
}

recibeArrayDevuelveArrayString(arrayDeInts);
newArray.map(({num, result})=>{
    const element = document.createElement('li');
    element.textContent= `${num} - ${result}`;
    element.style.padding= '5px 20px';
    element.style.backgroundColor = '#D641D9';
    element.style.marginTop = '4px';
    element.style.borderRadius = '10px 4px 10px 4px';
    lista.appendChild(element);
    })
console.log({newArray})
