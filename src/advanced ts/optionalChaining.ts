type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
//  Other way to do this using optional chaining (Optional property access operator) ('?')
// if (customer !== null && customer !== undefined)
console.log(customer?.birthday?.getFullYear());

// optional element access operator for arrays and stuff
// customers?.[0]

// optional call
// let log: any = null;
// log?.("a");
