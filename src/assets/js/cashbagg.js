/*
 CashBagg.js
 Author: Owusu (SMSGH)
 Date: 29/10/2015
 Last Modified: 29/10/15
*/

$(document).ready(function(){

  $(".theAccountBalance").hide();
  $(".theAccount").click(function(){
      $(".theAccountBalance").toggle();
      $(".showAccount").toggle();
  });

});
