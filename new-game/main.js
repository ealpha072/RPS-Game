//btns

let rockbtn = $('#rock')
let paperbtn = $('#paper')
let scissorbtn = $('#scissors')
let btns = [$('button')]


function getComp() {
  let myarr = ['rock',
    'paper',
    'scissors']
  return myarr[Math.floor(Math.random()*myarr.length)]
}

function play(user, comp) {
  comp = getComp()
  user = 'rock'
  let roundresults;
  if (user == comp) {
    roundresults = 'Draw'
  }else {
    if ( (user == 'rock' && comp == 'paper') || (user == 'paper' && comp == 'scissors') || (user == 'scissors' && comp == 'rock')){
      roundresults = 'Comp wins'
    }else {
      roundresults = 'User wins'
    }
  }
  return `User:${user}. Comp:${comp}. results:${roundresults}`
}

/*btns.forEach(btn => {
  btn.on('click',function(){
    var value = $(this).val()
    console.log(value)
  })
})*/
