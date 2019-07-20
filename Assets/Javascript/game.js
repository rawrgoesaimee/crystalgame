$(document).ready(function() {
	let answer;
    let totalAdd = 0;
    let wins = 0;
	let losses = 0;
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
		$("#totalAdd").text(totalAdd);
		$("#apatiteCrystal").attr("data-crystalvalue", crystal1Num);
		$("#bloodStone").attr("data-crystalvalue", crystal2Num);
		$("#garnetCrystal").attr("data-crystalvalue", crystal3Num);
		$("#pinkTourmaline").attr("data-crystalvalue", crystal4Num);
		$("#win").text(wins);
		$("#lose").text(losses);
		$("#numberTotal").text("");

		// console.log(crystal1Num, crystal2Num, crystal3Num, crystal4Num);
	}

	function youWin() {
		$("#numberTotal").text("YOU WIN!");
		wins++;
		$("#win").text(wins);
	}

	function youLose() {
		$("#numberTotal").text("YOU LOSE");
		losses++;
		$("#lose").text(losses);
    }
    

	newGame();

	$(".crystals").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});

	// Function to add the crystal values together
	$(".crystals").on("click", function() {
		if (totalAdd >= answer) {
			return;
		}

		let crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalAdd += crystalValue;
		$("#totalAdd").text(totalAdd);

		if (totalAdd === answer) {
			youWin();
		} else if (totalAdd > answer) {
			youLose();
		}
	});

	$("#playAgain").on("click", function() {
		newGame();
    });

    $("#playAgain").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});

});