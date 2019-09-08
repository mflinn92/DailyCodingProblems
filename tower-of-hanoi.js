var hanoiSolverRecursive = function(numDisks, fromPeg, toPeg, helper) {
  //base case n = 0 do nothing;

  if (numDisks > 0) {
    // numDisks - 1 case. => move n-1 disks to help peg
    // => move fromPeg to toPeg
    // move  numDisks-1 from helpPeg to toPeg;
    hanoiSolverRecursive(numDisks - 1, fromPeg, helper, toPeg);
    console.log('Move ' + fromPeg + ' to ' + toPeg);
    hanoiSolverRecursive(numDisks - 1, helper, toPeg, fromPeg);
  }
};

hanoiSolverRecursive(2, 1, 3, 2);

