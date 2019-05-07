function cardValidator(card) {
    let sum = 0;
    let cardValue = (card).split("");
    cardValue.forEach(function (str, index) {
        let numCard = parseInt(str);
        if (index % 2 === 0) {
            numCard = numCard * 2
            if (numCard > 9) {
                numCard -= 9;
            }
        }
        sum += numCard;
    });
    return (sum % 10 === 0);
};

module.exports.cardValidator = cardValidator;

