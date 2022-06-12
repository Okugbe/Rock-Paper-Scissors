//STEP I: Create Player 
    //a) Create Player Input: 'Rock', 'Paper', Scissors.
    //b) Return Player Input.
    //const playerSelection = prompt("Choose Your Destiny");


//STEP II: Create Computer
    //a) Create an array containing 'Rock', 'Paper', Scissors.
    function computerPlay() {
        let option = ["Rock", "Paper", "Scissors"]; 
        //b) Use Random number to Select Index.
        let selection = option[Math.floor(Math.random() * 3)];
        //c) Return Index value
        console.log(`Computer: ${selection}`);
        return selection;
    }

    //const computerSelection = computerPlay();
    
	//Create Score
        //(i) initialize PlayerScore = 0;
        //(ii) initialize ComputerScore = 0;
    let playerScore = 0;
    let computerScore = 0;

//STEP III: Create Decider( PlayerSelection, ComputerSelection )
    //a) Create a decider Function with two(2) parameters; PlayerSelection, ComputerSelection
        function gameDecider( playerSelection, computerSelection ) {
        
        

        //b) Create Comparison for decision
        //(i) if PlayerSelection === ComputerSelection; Return "it's a Tie".
        if ( playerSelection === computerSelection) {
            console.log(`It's a Tie`);
        }

        //(ii) if PlayerSelection == "Rock" && ComputerSelection == "Paper"; Return "You Lost, Paper Wins over Rock", ++ComputerScore.
        else if ( playerSelection == "Rock" && computerSelection == "Paper") {
            computerScore++ ;
            console.log(`You Lose, Paper Wins over Rock`);
        }

        //(iii) if PlayerSelection == "Rock" && ComputerSelection == "Scissors"; Return "You Win, Rock Wins over Scissors". ++PlayerScore.
        else if ( playerSelection == "Rock" && computerSelection == "Scissors" ) {
            playerScore++;
            console.log(`You Win, Rock Wins Over Scissors`);
        }

        //(iv) if PlayerSelection == "Paper" && ComputerSelection == "Rock"; Return "You Win, Paper Wins over Rock". ++PlayerScore
        else if ( playerSelection == "Paper" && computerSelection == "Rock" ) {
            playerScore++;
            console.log(`You Win! Paper Wins Over Rock`);
        }

        //(v) if PlayerSelection == "Paper" && ComputerSelection == "Scissors"; Return "You Lost, Paper Wins over Scissors" ++ComputerScore.
        else if ( playerSelection == "Paper" && computerSelection == "Scissors" ) {
            computerScore++;
            console.log(`You Lose, Paper Wins Over Scissors`) ;
        }

        //(vi) if PlayerSelection == "Scissors" && ComputerSelection == "Rock"; Return "You Lost, Rock Wins over Scissors" ++ComputerScore.
        else if ( playerSelection == "Scissors" && computerSelection == "Rock") {
            computerScore++;
            console.log( `You Lose! Rock Wins Over Scissors`);
        }

        //(vii) if PlayerSelection == "Scissors" && ComputerSelection == "Paper"; console.log() "You Win, Scissors Wins over Paper" ++PlayerScore.
        else if ( playerSelection == "Scissors" && computerSelection == "Paper" ) {
            playerScore++;
            console.log(`You Win! Scissors Wins Over Paper`) ;
            
        }

        //(viii) if PlayerSelection == " " && ComputerSelection == true; console.log() "Choose an Option". 
        else {
            console.log(`Input a Valid Option` );
        }
        
		//c) To Display Score Record
        console.log(`Player: ${playerScore} \t Computer: ${computerScore}`) ;
    }


    //(d) if PlayerScore > ComputerSelection? Return "You Lost,": "You Win".


//STEP IV: Create Game()
function game() {
    //(a) Instantiate Step I and
    //(b) Instantiate Step II
    
    //(c) Create a loop for the number of times and Call Game Decider() inside  

    for (let i = 1; i <= 5 ; i++) {

        const playerName = prompt("Choose Your Destiny!");
		const playerSelection = playerName.substring(0, 1).toUpperCase() + playerName.slice(1).toLowerCase();
        console.log(`Player: ${playerSelection}`);


        const computerSelection = computerPlay();
        
        gameDecider(playerSelection , computerSelection);
        
        
    }
}
    
game();

