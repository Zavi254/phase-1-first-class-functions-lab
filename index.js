// Code your solution in this file!
const drivers = ['Antonio', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (number) => {
    return function multiply(){
        return number * number;
    }
}

const fareDoubler = (number) => {
    return number * 2;
}

const fareTripler = (number) => {
    return number * 3;
}

function selectDifferentDrivers(drivers, fn){
    return fn(drivers);
}