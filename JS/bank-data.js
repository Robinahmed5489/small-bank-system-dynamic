// withdraw section
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-fund");
  const newWithdrawAmount = parseFloat(withdrawField.value);
  const previousWithdrawPlace = document.getElementById("withdrawHere");
  const previousWithdrawAmount = parseFloat(previousWithdrawPlace.innerText);
  const withdrawTotal = previousWithdrawAmount + newWithdrawAmount;

  previousWithdrawPlace.innerText = withdrawTotal;
  const previousTotalBalancePlace =
    document.getElementById("total-balance-here");
  const previousTotalBalance = parseFloat(previousTotalBalancePlace.innerText);
  const finalBalance = previousTotalBalance - newWithdrawAmount;
  previousTotalBalancePlace.innerText = finalBalance;
  withdrawField.value = "";
});

// deposit section
document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposited-fund");
  const newDepositAmount = parseFloat(depositField.value);

  const previousDepositPlace = document.getElementById("depositHere");
  const previousDepositAmount = parseFloat(previousDepositPlace.innerText);
  const DepositTotal = previousDepositAmount + newDepositAmount;
  previousDepositPlace.innerText = DepositTotal;

  const previousTotalBalancePlace =
    document.getElementById("total-balance-here");
  const previousTotalBalance = parseFloat(previousTotalBalancePlace.innerText);
  const finalBalance = previousTotalBalance + newDepositAmount;
  previousTotalBalancePlace.innerText = finalBalance;

  depositField.value = "";
});
