$(document).ready(function(event) {
event.preventDefault;
var groceries = ["q1", "q2", "q3"];
var count = 0;
  // $("#goButton").click(function(event){
  //   groceries.forEach(function(grocery){
  //     var input = $("#" + grocery).val();
  //     console.log(input);
  //     groceries.splice(count, 1, input);
  //     console.log(groceries);
  //     count ++;
  //   });
 var capGroceries = groceries.map(function(word) {
    return word.toUpperCase();
 })
console.log(capGroceries + "read this one");

capGroceries.sort();
console.log(capGroceries);
capGroceries.forEach(function(grocery) {
  $("#output").append("<li>" + grocery + "</li>")
});
});
});


//     groceries.sort();
//     console.log(groceries);
//     groceries.forEach(function(grocery) {
//       $("#output").append("<li>" + grocery + "</li>")
//     });
//   });
// });
