$('.shopping-list').on('click','.shopping-item-toggle', function(event) {
  $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
});



$('.shopping-list').on('click','.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
});

$(function(){
    $("#js-shopping-list-form").submit(event => {
      event.preventDefault();

      const newItem = $("#shopping-list-entry").val();
      $(".js-shopping-list-entry").val(" ");

      console.log(newItem);
      $(".shopping-list").append(
        `<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
        );
    }); 
  });

 
   
    