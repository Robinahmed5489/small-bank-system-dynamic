// withdraw section
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-fund");
  const newWithdrawAmount = parseFloat(withdrawField.value);
  const previousWithdrawPlace = document.getElementById("withdrawHere");
  const previousWithdrawAmount = parseFloat(previousWithdrawPlace.innerText);
  const withdrawTotal = previousWithdrawAmount + newWithdrawAmount;
  const previousTotalBalancePlace =
    document.getElementById("total-balance-here");
  const previousTotalBalance = parseFloat(previousTotalBalancePlace.innerText);

  if (isNaN(newWithdrawAmount)) {
    alert("sothik number add koren");
  } else if (newWithdrawAmount > previousTotalBalance) {
    alert("tor baper account e oto tk nai");
  } else {
    previousWithdrawPlace.innerText = withdrawTotal;

    const finalBalance = previousTotalBalance - newWithdrawAmount;
    previousTotalBalancePlace.innerText = finalBalance;
  }
  withdrawField.value = "";
});

// deposit section
document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposited-fund");
  const newDepositAmount = parseFloat(depositField.value);

  const previousDepositPlace = document.getElementById("depositHere");
  const previousDepositAmount = parseFloat(previousDepositPlace.innerText);
  const DepositTotal = previousDepositAmount + newDepositAmount;
  const previousTotalBalancePlace =
    document.getElementById("total-balance-here");
  const previousTotalBalance = parseFloat(previousTotalBalancePlace.innerText);
  if (isNaN(newDepositAmount)) {
    alert("apni sothik ammount den nai");
  } else {
    previousDepositPlace.innerText = DepositTotal;

    const finalBalance = previousTotalBalance + newDepositAmount;
    previousTotalBalancePlace.innerText = finalBalance;
  }

  depositField.value = "";
});
