function toggleFavorite(button) {
  button.classList.toggle('favorited');
}
function updateIngredients() {
  const servings = document.getElementById('servings').value;
  const ingredients = document.querySelectorAll('#ingredient-list li');

  ingredients.forEach(ingredient => {
      const baseQuantity = ingredient.getAttribute('data-quantity');
      ingredient.textContent = (baseQuantity * servings) + ' ' + ingredient.textContent.split(' ').slice(1).join(' ');
  });
}
function search() {
  let filter = document.getElementById('find').value.toUpperCase();
  let item = document.querySelectorAll('.product');
  let l = document.getElementsByTagName('h3');
  for(var i = 0;i<=l.length;i++){
  let a=item[i].getElementsByTagName('h3')[0];
  let value=a.innerHTML || a.innerText || a.textContent;
  if(value.toUpperCase().indexOf(filter) > -1) {
  item[i].style.display="";
  }
  else
  {
  item[i].style.display="none";
  }
  }
  }
