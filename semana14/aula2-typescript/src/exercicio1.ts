const arrayOfNumber: number[] = [1,2,3,4,5,6,7,8,9,10]

type answer = {
    amountOfNumbers: number,
    amountOfImpars: number,
    sumOfElements: number,
}

function verifyArray(array: number[]): answer{
    let sum: number = 0
    let amountImpar: number = 0

    array.forEach( item => {
        sum += item

        if(item % 2 !== 0){
            amountImpar += 1
        }
    })
    
    const result:answer = {
        amountOfNumbers: array.length,
        amountOfImpars: amountImpar,
        sumOfElements: sum,
    }

    return result
}

console.log(verifyArray(arrayOfNumber))