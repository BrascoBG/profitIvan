function profitIvan([arg1,arg2,arg3]){
  let monthSalary = arg1 * arg2;
  let yearSalaryBonus = (monthSalary * 12) + (monthSalary * 2.5);
  let usdBgn = parseFloat(arg3); 
  let taxes = yearSalaryBonus * 0.25;
  let salaryNetUsd = yearSalaryBonus - taxes;
  let salaryNetBgn = salaryNetUsd * usdBgn;
  
  console.log("Your average NET salary after taxes is " + (salaryNetBgn / 365).toFixed(2) + " per day.");
}

profitIvan([15,105,1.71]);
