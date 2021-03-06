$(function(){
  var groceryItems = [];
  var itemNumbers = [1, 2, 3, 4];

  $('#groceryList').submit(function(event){

    function createShoppingList() {
      itemNumbers.forEach(function(itemNumber){
        var userItem = $('#item' + itemNumber).val();
        groceryItems.push(userItem);
        // console.log(groceryItems);
      });
    }

    function showList() {
      $('#groceryList').hide();
      groceryItems.forEach(function(groceryItem){
        $('ul').append('<li>' + groceryItem.toUpperCase() + '</li>');
      });
    }

    function alphabetize(array) {
      return array.sort();
    }

    createShoppingList();
    alphabetize(groceryItems);
    showList();
    event.preventDefault();
  });
});
