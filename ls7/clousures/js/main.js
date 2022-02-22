
function userCard(number){
    let log = [];
    let today = new Date();
    today.getDate()
    let createdTime = today
    let card = { balance: 100,
                 transactionLimit: 100,
                 historyLogs: [],
                 key: number,

                 getCardOption: ()=>{
                     return  {id:card.key, Balance:card.balance,HistoryLogs:card.historyLogs,TransactionLimit:card.transactionLimit};
                 },
                 putCredits: (money)=>{
                        card.balance += money;
                        today.getDate();
                        log.push({operationType: "received credits", credits: card.balance, operationTime: today});
                        card.historyLogs = log;

                 },
                 takeCredits:(money)=>{
                    if(card.balance>=money && money<=card.transactionLimit) {
                        card.balance -= money;
                        today.getDate();
                        log.push({operationType: "withdrawal of credits",credits:card.balance,operationTime:today})
                    }else{
                        console.error('Ошибка ваш лимит транзакции: ',card.transactionLimit);
                    }
                 },
                 setTransactionLimit:(newLimit)=>{
                   card.transactionLimit = newLimit;
                   today.getDate();
                   log.push({operationType: "Transaction limit change",credits:card.balance,operationTime:today})
                 },
                 transferCredit:(credit,RecipientsCard)=>{
                    if(credit>=card.balance && credit>=card.transactionLimit){
                        console.error("Недостаточно средств на счету!Ваш баланс:",card.balance);
                    }else {
                        credit += credit*0.05;
                        card.takeCredits(credit);
                        RecipientsCard.putCredits(credit)
                    }
                 }
    }
    log = [{operationType: "Created card",credits:card.balance,createdTime}]
    card.historyLogs =log;

    return card;
}

class UserAccount{
    constructor(UserName) {
        this.UserName = UserName;
        this.cards = [];
    }

     addCard(){
        if(this.cards.length<=3){
            if(this.cards.length===0){
                this.cards.push(userCard(1));
            }else if(this.cards.length===1){
                this.cards.push(userCard(2));
            }else{
                this.cards.push(userCard(3));
            }
        }else{
            console.error('Вы можете иметь только 3 карточки.')
        }
    }
    getCardByKey(number){
        if(number>0 && number<=3){
            return this.cards[number-1];
        }else{
            console.error("Ошибка нету такой карточки!")
        }
    }
}

let user = new UserAccount('Bob');
user.addCard();
user.addCard();
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredit(300,card2);

card2.takeCredits(50);

console.log(card1.getCardOption());
console.log(card2.getCardOption());
