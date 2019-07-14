function convertToRoman(num) {
    let digits = num.toString().split('');

    //iterate through the array from the end, multiplying by a power of 10 each time
    for (let i = 0; i < digits.length; i++) {
        let multiplier = Math.pow(10, i);
        digits[digits.length - 1 - i] *= multiplier;
    }

    for (let i in digits) {
        if (digits[i] % 1000 === 0) {
            digits[i] /= 1000;
            digits[i] = 'M'.repeat(digits[i]);
        }
        else if (digits[i] % 100 === 0) {
            digits[i] /= 100;
            if (digits[i] < 4) {
                digits[i] = 'C'.repeat(digits[i]);
            }
            else if (digits[i] === 4) {
                digits[i] = 'CD';
            }
            else if (digits[i] > 4 && digits[i] < 9) {
                digits[i] = 'D' + 'C'.repeat(digits[i] - 5);
            }
            else if (digits[i] === 9) {
                digits[i] = 'CM';
            }
        }

        else if (digits[i] % 10 === 0) {
            digits[i] /= 10;
            if (digits[i] < 4) {
                digits[i] = 'X'.repeat(digits[i]);
            }
            else if (digits[i] === 4) {
                digits[i] = 'XL';
            }
            else if (digits[i] > 4 && digits[i] < 9) {
                digits[i] = 'L' + 'X'.repeat(digits[i] - 5);
            }
            else if (digits[i] === 9) {
                digits[i] = 'XC';
            }
        }

        else {
            if (digits[i] < 4) {
                digits[i] = 'I'.repeat(digits[i]);
            }
            else if (digits[i] === 4) {
                digits[i] = 'IV';
            }
            else if (digits[i] > 4 && digits[i] < 9) {
                digits[i] = 'V' + 'I'.repeat(digits[i] - 5);
            }
            else if (digits[i] === 9) {
                digits[i] = 'IX';
            }
        }

    };
    num = digits.join('');
    return num;
   }
   
convertToRoman(891);