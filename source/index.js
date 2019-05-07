function cardValidator(card) {
    let sum = 0;
    let cardValue = (card).split("");
    cardValue.forEach(function (str, index) {
        let numCard = parseInt(str);
        sum += (index % 2 === 0) ? numCard * 2 : (numCard > 9) ? numCard = numCard - 9 : numCard * 2
    });
    return (sum % 10 === 0);
};

module.exports.cardValidator = cardValidator;

