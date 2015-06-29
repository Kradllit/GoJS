var numbers = [1, 2, 3, 4, 5];
numbers.sort(randOrd)
console.log(numbers);


function randOrd(){
    return (Math.round(Math.random())-0.5);
}