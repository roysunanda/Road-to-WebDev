class Account {
    id;
    owner;
    _balance;
    // readonly id: number;
    // owner: string;
    // balance: number;
    nickname;
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        // this.id = id;
        // this.owner = owner;
        // this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get getBalance() {
        return this._balance;
    }
    set setBalance(value) {
        if (value < 0)
            throw new Error("Invalid value");
        this._balance = value;
    }
}
let account = new Account(10, "sandy", 0);
// account.deposit(500);
// account.deposit(300);
// console.log(account.);
// account.id = 7;
// console.log(`hello world`);
// console.log(account.getBalance);
// account.setBalance = 50;
// console.log(account.getBalance);
// #### Index Signatures ###
class SeatAssignment {
}
let seats = new SeatAssignment();
seats["B1"] = "sandy";
seats["B2"] = "bishal";
// ### Static Memembers ###
class Ride {
    activeRides = 0;
    start() {
        this.activeRides++;
    }
    stop() {
        this.activeRides--;
    }
}
// ### Generic ###
class KeyValuePair {
    key;
    value;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair("1", "a");
export {};
//# sourceMappingURL=index.js.map