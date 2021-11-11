
let rockbtn = $('#rock'), paperbtn = $('#paper'), scissorbtn = $('#scissors'), btns = [$('.btn-block')]

//round variables
let roundwinner = $('#roundwinner'), compchoice = $('#compchoice'), userchoice = $('#userchoice')

//game variables
let scoreuser = $('#userscore'), scorecomp =  $('#compscore'), gamesplayed = $('#gamesplayed'), gamewinner =  $('#winner')

let userscore = 0, compscore = 0, gamecount = 0


function getComp() {
	let myarr = ['rock','paper','scissors']
	return myarr[Math.floor(Math.random()*myarr.length)]
}

function singleRound(user, comp) {
	let roundresults;
	if (user == comp) {
    	roundresults = 0
  	}else {
    	if ( (user == 'rock' && comp == 'paper') || (user == 'paper' && comp == 'scissors') || (user == 'scissors' && comp == 'rock')){
      		roundresults = 1 //comp wins
    	}else {
      		roundresults = 2 //user wins
    	}
  	}
	return roundresults
}

function endGame(){
	btns.forEach(btn=>{
		btn.attr('disabled','')
	})
}

function resetGame(){

	roundwinner.html('')
	userchoice.html('')
	compchoice.html('')
	scoreuser.html('')
	scorecomp.html('')
	gamesplayed.html('')
	gamewinner.html('')

	userscore = compscore = gamecount = 0

	btns.forEach(btn=>{
		btn.removeAttr('disabled')
	})
}

$(function () {
	$('#rules').on('click',function(){
		$('.rules-card').toggle('show')
	})

	$('#restart').on('click',function(){
		resetGame()
		$(this).attr('disabled','')
	})

	btns.forEach((btn) => {
		btn.on("click", function () {
			let user = $(this).val(), comp = getComp(), winner = singleRound(user, comp);
			if (winner == 0) {
				gamecount++
				roundwinner.html("");
				userchoice.html('')
				compchoice.html('')

				userchoice.html(user.toUpperCase())
				compchoice.html(comp.toUpperCase())
				roundwinner.html("Draw");
			} else if (winner == 1) {
				roundwinner.html("");
				userchoice.html('')
				compchoice.html('')
				
				userchoice.html(user.toUpperCase())
				compchoice.html(comp.toUpperCase())
				roundwinner.html("Comp wins");
				gamecount++
				compscore++
			} else {
				roundwinner.html("");
				userchoice.html('')
				compchoice.html('')

				userchoice.html(user.toUpperCase())
				compchoice.html(comp.toUpperCase())
				roundwinner.html("User wins");
				gamecount++
				userscore++
			}
			scorecomp.html('')
			scoreuser.html('')
			gamesplayed.html('')
			scorecomp.html(compscore)
			scoreuser.html(userscore)
			gamesplayed.html(gamecount)

			if(userscore == 5){
				gamewinner.html('')
				gamewinner.html('You win')
				endGame()
				$('#restart').removeAttr('disabled')
			}
			if(compscore == 5){
				gamewinner.html('')
				gamewinner.html('Comp wins')
				endGame()
				$('#restart').removeAttr('disabled')
			}
    	});
	});
});
