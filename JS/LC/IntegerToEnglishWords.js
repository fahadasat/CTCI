/**
 * @param {number} num
 * @return {string}
 273
 */
var numberToWords = function (num) {
    const digits = {
        0: 'Zero', 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five',
        6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten',
        11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen',
        15: 'Fifteen', 16: 'Sixteen', 17: 'seventeen', 18: 'Eighteen',
        19: 'Nineteen', 20: 'Twenty',
        30: 'Thirty', 40: 'Forty', 50: 'Fifty', 60: 'Sixty',
        70: 'Seventy', 80: 'Eighty', 90: 'Ninety'
    }

    k = 1000;
    m = k * 1000;
    b = m * 1000;

    if (num < 20)
        return digits[num];

    if (num < 100) {
        if (num % 10 === 0)
            return digits[num]
        return digits[Math.floor(num / 10) * 10] + " " + digits[num % 10];
    }

    if (num < k) {
        if (num % 100 === 0)
            return digits[num / 100] + " Hundred"
        else
            return digits[Math.floor(num / 100)] + " Hundred " + numberToWords(num % 100);
    }

    if (num < m) {
        if (num % k === 0)
            return numberToWords(Math.floor(num / k)) + " Thousand"
        else
            return numberToWords(Math.floor(num / k)) + " Thousand " + numberToWords(num % k);
    }
};