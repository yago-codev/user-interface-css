const colors = $('.product-colors span');
const price = $('.product-price');
const productButton = $('.product-button');
const picture = $('.product-pic');

colors.click(function() {
  colors.removeClass('active');
  $(this).addClass('active');
  $('body').css('background-color', $(this).attr('data-color'));
  price.css('color', $(this).attr('data-color'));
  productButton.css('color', $(this).attr('data-color'));
  picture.css('background-image', $(this).attr('data-pic'));
}); 