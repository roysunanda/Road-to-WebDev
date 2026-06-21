class Account {
  // readonly id: number;
  // owner: string;
  // balance: number;
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
  ) {
    // this.id = id;
    // this.owner = owner;
    // this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  get getBalance() {
    return this._balance;
  }

  set setBalance(value: number) {
    if (value < 0) throw new Error("Invalid value");
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
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();

seats["B1"] = "sandy";
seats["B2"] = "bishal";

// ### Static Memembers ###

class Ride {
  activeRides: number = 0;

  start() {
    this.activeRides++;
  }
  stop() {
    this.activeRides--;
  }
}

// ### Generic ###

class KeyValuePair<T> {
  constructor(
    public key: T,
    public value: string,
  ) {}
}

let pair = new KeyValuePair("1", "a");
