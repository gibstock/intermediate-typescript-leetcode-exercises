function maxProfit(prices:number[]):number {
  let buy:number = prices[0]
  let profit:number = 0

  for(let i=0; i<prices.length; i++){
    prices[i] < buy ? buy = prices[i] : null
    profit = Math.max(profit, prices[i] - buy)
  }
  return profit
}