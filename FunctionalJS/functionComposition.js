function reducedPipeline(...functions){
  return reduce((funcA, funcB) => {
    return (input) => funcA(funcB(input))
  }, input => input, ...functions)
}

function pipeline (...funcs) {
  // First, consider some base cases
  // If funcs.length == 0, simply return the input
  // This technique is referred to as an identity function, a function that returns the input it receives
  // if (length(funcs) == 0 ) {
  //   return function (input) {
  //     return input
  //   }
  // }
  // // Next if there is only one function in the args, return that function operating on the input
  // if (length(funcs) == 1) {
  //   return head(funcs)(input);
  // }
  // // Now, what to do with the rest of the functions.
  // if (length(funcs) == 2) {
  //   return pipeline(tail(funcs))(head(funcs)(input))
  // }
  // if (length(funcs) >= 3) {
  //   return pipeline(...tail(funcs))(head(funcs)(input))
  // }

  // Simply the above
  if (length(funcs) == 0 ) {
    return function (input) {
      return input
    }
  }
  if (length(funcs) == 1) {
    return head(funcs)(input);
  }
  return function (input) {
    return pipeline(...tail(funcs))(head(funcs)(input))
  }

  // Consider this case
  function pipelineThought(fA, fB, fC) {
    return function (input) {
        return pipelineThought(fB, fC)(fA(input))
        // Which when taken to its final level will produce this:
        // return pipelingThought(fC)(fB(fA(input)))
    }
  }
}



function ender (ending) {
  return function (input) {
    return input + ending
  }
}