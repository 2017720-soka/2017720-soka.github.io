function janken(myHand) {

    var handArray = ['グー', 'チョキ', 'パー'];

    console.log('プレイヤーの手は' + handArray[myHand]);

    var random = Math.random() * 100;
    console.log(random);

    var randomInt = Math.floor(random)
    console.log(randomInt);

    var computerHand = randomInt % 3;
    console.log('コンピュータの手は' + handArray[computerHand]);

    var victory = 0;

    victory = (myHand - computerHand + 3) % 3;

    if(myHand == 0) {
         if(computerHand == 0) {
             victory = 0;
         } else if(computerHand == 1) {
         victory = 2;
         } else if(computerHand == 2) {
             victory = 1;
         }

    } else if (myHand == 1) {
         if(computerHand == 0) {
             victory = 1;
         } else if(computerHand == 1) {
             victory = 0;
         } else if(computerHand == 2) {
             victory = 2;
         }

     } else if (myHand == 2) {
     if(computerHand == 0) {
             victory = 2;
         } else if(computerHand == 1) {
             victory = 1;
         } else if(computerHand == 2) {
             victory = 0;
         }
     }

    var messageArray = ['アイコです', 'あなたの負けです', 'あなたの勝ちです'];
    alert('あなたの手は' + handArray[myHand] + '，コンピュータの手は' + handArray[computerHand] + '，なので' + messageArray[victory]);

    $('#janken-result-p').text("あなたの手は" + handArray[myHand] + "，コンピュータは" + handArray[computerHand] + "なので" + messageArray[victory]);

}

