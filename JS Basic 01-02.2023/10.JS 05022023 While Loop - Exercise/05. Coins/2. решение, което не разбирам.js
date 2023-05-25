function coins(arg, count=0) {
  let money = +arg[0]
  for (const coin of [2, 1, .50, .20, .10, .05, .02, .01]) {
    count += ~~(money / coin)
    money = (money % coin).toFixed(2) 
  }
  return count
}