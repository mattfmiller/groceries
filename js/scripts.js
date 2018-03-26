$(function(){
  var groceryItems = [];
  var itemNumbers = [1, 2, 3, 4];
  $('#groceryList').submit(function(event){
    itemNumbers.forEach(function(itemNumber){
      var userItem = $('#item' + itemNumber).val();
      groceryItems.push(userItem);
      console.log(groceryItems);
    });
    event.preventDefault();
  });
});
