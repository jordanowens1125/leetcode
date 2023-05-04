var maxProfit = function(prices) {
  //sliding window
    let l = 0
    let r = 1
    let max = 0
    while(r < prices.length){
      if(prices[l] < prices[r]){
        max = Math.max(max, prices[r]-prices[l])
      }
      else{
        l=r
      }
      r++
    }
    return max
};
