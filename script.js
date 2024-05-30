function revertMoney(currentCours) {
    const cours = currentCours

    return (money) => {
        const result = money * cours / 100
        return result
    }
}

const exchange = revertMoney(3.45)
const exchange2 = revertMoney(4.57)

const result = exchange(10000)
const result2 = exchange2(10000)

console.log(result);
console.log(result2);



function Money(num) {
    let q = num
    return (value) => {
        return value + q
    }
}

const sum = Money(2)
console.log(sum(11));
