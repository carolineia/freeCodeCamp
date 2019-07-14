function checkCashRegister(price, cash, cid) {
    // Everything is in calculated in pennies. No thank you decimals!
    const PENNY = 1;
    const NICKEL = 5;
    const DIME = 10;
    const QUARTER = 25;
    const DOLLAR = 100;
    const FIVE = 500;
    const TEN = 1000;
    const TWENTY = 2000;
    const HUNDRED = 10000;

    // Calculate the change due (in pennies)
    let changeDue = (cash * 100) - (price * 100);

    let change = {
        status: "INSUFFICIENT_FUNDS",
        change: []
    };

    // If the register is closed after change is given, we will need to print out the original contents of the register
    let closed = {
        status: "CLOSED",
        change: JSON.parse(JSON.stringify(cid))
    };

    // Calculate the total cash in the register
    let totalCashInRegister = 0;
    for (let i = 0; i < cid.length; i++) {
        cid[i][1] *= 100;
        totalCashInRegister = totalCashInRegister + cid[i][1];
    }

    // If the cash in the register is less than the change due, then we have insufficient funds
    if (totalCashInRegister < changeDue) {
        return change;
    }

    let hundredsRequired = 0;
    let twentysRequired = 0;
    let tensRequired = 0;
    let fivesRequired = 0;
    let dollarsRequired = 0;
    let quartersRequired = 0;
    let dimesRequired = 0;
    let nickelsRequired = 0;
    let pennysRequired = 0;

    while (changeDue > 0) {
        while (changeDue >= HUNDRED && cid[8][1] >= HUNDRED) {
            changeDue -= HUNDRED;
            cid[8][1] -=HUNDRED;
            
            hundredsRequired += HUNDRED;
            totalCashInRegister -= HUNDRED;

            if (cid[8][1] < HUNDRED || changeDue < HUNDRED) {
                change.change.push(["HUNDRED", hundredsRequired/100]);
            }
        }

        while (changeDue >= TWENTY && cid[7][1] >= TWENTY) {
            changeDue -= TWENTY;
            cid[7][1] -= TWENTY;

            twentysRequired += TWENTY;
            totalCashInRegister -= TWENTY;

            if (cid[7][1] < TWENTY || changeDue < TWENTY) {
                change.change.push(["TWENTY", twentysRequired/100]);
            }
        }

        while (changeDue >= TEN && cid[6][1] >= TEN) {
            changeDue -= TEN;
            cid[6][1] -=TEN;

            tensRequired += TEN;
            totalCashInRegister -= TEN;

            if (cid[6][1] < TEN || changeDue < TEN) {
                change.change.push(["TEN", tensRequired/100]);
            }
        }

        while (changeDue >= FIVE && cid[5][1] >= FIVE) {
            changeDue -= FIVE;
            cid[5][1] -=FIVE;

            fivesRequired += FIVE;
            totalCashInRegister -= FIVE;

            if (cid[5][1] < FIVE || changeDue < FIVE) {
                change.change.push(["FIVE", fivesRequired/100]);
            }
        }

        while (changeDue >= DOLLAR && cid[4][1] >= DOLLAR) {
            changeDue -= DOLLAR;
            cid[4][1] -=DOLLAR;

            dollarsRequired += DOLLAR;
            totalCashInRegister -= DOLLAR;

            if (cid[4][1] < DOLLAR || changeDue < DOLLAR) {
                change.change.push(["ONE", dollarsRequired/100]);
            }
        }

        while (changeDue >= QUARTER && cid[3][1] >= QUARTER) {
            changeDue -= QUARTER;
            cid[3][1] -= QUARTER;

            quartersRequired += QUARTER;
            totalCashInRegister -= QUARTER;

            if (cid[3][1] < QUARTER || changeDue < QUARTER) {
                change.change.push(["QUARTER", quartersRequired/100]);
            }
        }

        while (changeDue >= DIME && cid[2][1] >= DIME) {
            changeDue -= DIME;
            cid[2][1] -= DIME;
            
            dimesRequired += DIME;
            totalCashInRegister -= DIME;

            if (cid[2][1] < DIME || changeDue < DIME) {
                change.change.push(["DIME", dimesRequired/100]);
            }
        }
        while (changeDue >= NICKEL && cid[1][1] >= NICKEL) {
            changeDue -= NICKEL;
            cid[1][1] -= NICKEL;

            nickelsRequired += NICKEL;
            totalCashInRegister -= NICKEL;

            if (cid[1][1] < NICKEL || changeDue < NICKEL) {
                change.change.push(["NICKEL", nickelsRequired/100]);
            }
        }

        while (changeDue >= PENNY && cid[0][1] >= PENNY) {

            changeDue -= PENNY;
            cid[0][1] -= PENNY;

            pennysRequired += PENNY;
            totalCashInRegister -= PENNY;

            if (cid[0][1]*100 < PENNY || changeDue < PENNY) {
                change.change.push(["PENNY", pennysRequired/100]);
            };
        };

        if (changeDue === 0 && totalCashInRegister === 0) {
            return closed;
        } 
        else if (changeDue === 0 && totalCashInRegister > 0) {
            change.status = "OPEN";
            return change;
        }
        else {
            change.status = "INSUFFICIENT_FUNDS";
            change.change = [];
            return change;
        }
    }
} 

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])