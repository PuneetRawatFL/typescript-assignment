"use strict";
// 11. TypeScript Classes
// Assignment: Build a Bank Account Management System that uses TypeScript classes to represent different types of bank accounts with inheritance and access modifiers.
// Requirements:
// Base Class:
// Create a BankAccount base class with properties like accountNumber, accountHolder, and balance.
// Implement methods for deposit and withdraw operations.
// Derived Classes:
// Create derived classes SavingsAccount and CheckingAccount that inherit from BankAccount.
// Implement specific features for each account type (e.g., interest for SavingsAccount and overdraft protection for CheckingAccount).
// Access Modifiers:
// Use private, protected, and public access modifiers to encapsulate class properties and methods appropriately.
// Static Methods & Properties:
// Implement a static method to count the total number of accounts created.
// Use a static property to store bank-wide information, like the bank’s name.
// Getters and Setters:
// Implement getter and setter methods for class properties that need controlled access.
// Error Handling:
// Ensure proper error handling for operations like withdrawing more than the balance.
// Deliverables:
// A TypeScript file that includes:
// The BankAccount base class and its derived classes.
// Implementation of methods for deposit, withdrawal, and specific account operations.
// Use of access modifiers, static methods, and properties.
// Getter and setter methods for controlled access.
// Demonstrations of creating different account types and performing operations.
// Comments explaining the design choices, such as the use of inheritance and access control.
// Assurance that the TypeScript compiler reports no errors.
//bank account class
class bankAccount {
    constructor(_accountNumber, _accountHolder, _balance) {
        this._accountNumber = _accountNumber;
        this._accountHolder = _accountHolder;
        this._balance = _balance;
        this._accountNumber = _accountNumber;
        this._accountHolder = _accountHolder;
        this._balance = _balance;
        bankAccount.totalAccounts += 1;
    }
    //deposit method
    depositAmount(a) {
        this._balance += a;
        console.log("Updated balance:", this._balance);
    }
    //withdraw method
    withdrawAmount(a) {
        if (a > 0 && a < this._balance) {
            this._balance -= a;
            console.log(`Updated balance: ${this._balance}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    //get balance
    getBalance() {
        return this._balance;
    }
    //get account number
    getAccountNumber() {
        return this._accountNumber;
    }
    //get account holder
    getAccountHolder() {
        return this._accountHolder;
    }
    //static method to get total no of accounts created
    static getAccountCount() {
        return this.totalAccounts;
    }
}
// protected accountNumber: number;
// protected accountHolder: string;
// private balance: number;
bankAccount.totalAccounts = 0;
bankAccount.bankName = "Axis Bank Mansarovar";
bankAccount.bankIFSC = "AXIS000001232";
//derived class savings account
class SavingsAccount extends bankAccount {
    constructor(accountNumber, accountHolder, _balance, interest) {
        super(accountNumber, accountHolder, _balance);
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this._balance = _balance;
        this.interest = interest;
        this.interest = interest;
    }
    addInterest() {
        let int = this._balance * (this.interest / 100);
        this._balance += int;
        console.log(`Interest applied: ${this.interest} Updated _balance: ${this._balance}`);
    }
}
//derived class checking account
class CheckingAccount extends bankAccount {
    constructor(accountNumber, accountHolder, _balance, overdraftLimit) {
        super(accountNumber, accountHolder, _balance);
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this._balance = _balance;
        this.overdraftLimit = overdraftLimit;
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount > 0 && this._balance + this.overdraftLimit >= amount) {
            this._balance -= amount;
            console.log(`Withdrawn: $${amount}. New Balance: $${this._balance}`);
        }
        else {
            console.log("Insufficient balance and overdraft protection.");
        }
    }
}
//savings account
const savingsAccount = new SavingsAccount("SA123", "Alice Johnson", 1000, 5);
savingsAccount.depositAmount(200); // Deposited: $200. New Balance: $1200
savingsAccount.addInterest(); // Interest added: $60. New Balance: $1260
//checking account
const checkingAccount = new CheckingAccount("CA123", "Bob Smith", 500, 200);
checkingAccount.depositAmount(100); // Deposited: $100. New Balance: $600
checkingAccount.withdraw(700); // Withdrawn: $700. New Balance: -$100
checkingAccount.withdraw(200); // Insufficient balance and overdraft protection.
//view details
//savings account
console.log(`Savings Account Number: ${savingsAccount.getAccountNumber()}`);
console.log(`Savings Account Holder Name: ${savingsAccount.getAccountHolder()}`);
console.log(`Savings Account Balance: $${savingsAccount.getBalance()}`);
//checking acccount
console.log(`Checking Account Number: ${checkingAccount.getAccountNumber()}`);
console.log(`Checking Account Holder Name: ${checkingAccount.getAccountHolder()}`);
console.log(`Checking Account Balance: $${checkingAccount.getBalance()}`);
//total number of accounts
//creating object of main bank class
// const mainBank = new Bank
console.log(`Total no of accounts: ${bankAccount.getAccountCount()}`);
console.log(`Bank name: ${bankAccount.bankName}`);
console.log(`Bank IFSC: ${bankAccount.bankIFSC}`);
