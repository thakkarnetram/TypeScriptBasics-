function income(income: number, taxYear: number): number {
  if (taxYear <= 10000) {
    return income * 100;
  }
  return 100;
}
// noUnusedLocals
// noUsedParameters
// noImplicitReturns
