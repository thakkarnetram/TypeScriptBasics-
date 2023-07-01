"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
//  Other way to do this using optional chaining (Optional property access operator) ('?')
// if (customer !== null && customer !== undefined)
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// optional element access operator for arrays and stuff
// customers?.[0]
// optional call
// let log: any = null;
// log?.("a");
