const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hour = date.getHours();
const minute = date.getMinutes();

document.getElementById('day').innerHTML = day + '/' + month + '/' + year + ' at ' + hour + ':' + minute

console.log(day)

function myFunction() {
    // result = document.getElementById('total')

    const roll1 = Math.floor(Math.random() * 6) + 1
    console.log(roll1)

    const roll2 = Math.floor(Math.random() * 6) + 1
    console.log(roll2)

    var total = roll1 + roll2
    console.log (total)

    document.getElementById('dice1').src = "dice-" + roll1 + ".svg"
    document.getElementById('dice2').src = "dice-" + roll2 + ".svg"

    document.querySelector('#total').innerHTML = total

    if (total >= 8) {
        document.querySelector('h3').innerHTML = "You Win: Try Again!"
    } else {
        document.querySelector('h3').innerHTML = "You Didn't win: Try Again!"
    }
}