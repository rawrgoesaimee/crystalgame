$(document).ready(function() {
	let answer;
    let totalAdd = 0;
    let wins = "Wins: ";
	let losses = "Losses: ";
	let crystal1Num;
	let crystal2Num;
	let crystal3Num;
	let crystal4Num;

	function newNumbers() {
		answer = Math.floor(Math.random() * 110) + 10;
		crystal1Num = Math.ceil(Math.random() * 12);
		crystal2Num = Math.ceil(Math.random() * 12);
		crystal3Num = Math.ceil(Math.random() * 12);
		crystal4Num = Math.ceil(Math.random() * 12);
	}

	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#giveNumber").text(answer);
		$("#totaladd").text(totalAdd);
		$("#apatiteCrystal").attr("data-crystalvalue", crystal1Num);
		$("#bloodStone").attr("data-crystalvalue", crystal2Num);
		$("#garnetCrystal").attr("data-crystalvalue", crystal3Num);
		$("#pinkTourmaline").attr("data-crystalvalue", crystal4Num);
		$("#win").text(wins);
		$("#lose").text(losses);
		$("#winOrLose").text("");

		// console.log(crystal1Num, crystal2Num, crystal3Num, crystal4Num);
	}

	function youWin() {
		$("#winOrLose").text("YOU WIN!");
		wins++;
		$("#wins").text(wins);
	}

	function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
		$("#losses").text(losses);
	}

	newGame();

	$(".crystals").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});

	// Function to add the crystal values together
	$(".crystalimg").on("click", function() {
		if (totalScore >= magicNumber) {
			return;
		}

		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$("#totalScore").text(totalScore);

		if (totalScore === magicNumber) {
			youWin();
		} else if (totalScore > magicNumber) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});