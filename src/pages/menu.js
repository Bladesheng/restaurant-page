function createMenu() {

  function createFood(index, name, price, ingredients) {
    const food = document.createElement("li");
    menu.appendChild(food);
    
    const foodIndex = document.createElement("div");
    foodIndex.classList.add("num");
    foodIndex.textContent = index + ".";
    food.appendChild(foodIndex);
    
    const foodName = document.createElement("div");
    foodName.classList.add("name");
    foodName.textContent = name;
    food.appendChild(foodName);
    
    const foodPrice = document.createElement("div");
    foodPrice.classList.add("price");
    foodPrice.textContent = price + " $";
    food.appendChild(foodPrice);
    
    const foodIngredients = document.createElement("div");
    foodIngredients.classList.add("ingredients");
    foodIngredients.textContent = ingredients;
    food.appendChild(foodIngredients);
  }


  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menuWrapper");
  
  const heading = document.createElement("h2");
  heading.textContent = "Pizza menu";
  menuWrapper.appendChild(heading);
  
  const menu = document.createElement("ol");
  menuWrapper.appendChild(menu);

  // https://pizzaitaly.cz/wp-content/uploads/2022/04/Made-in-Italy-Pizza-Menu-2022.pdf
  
  const foods = [
    ["Marinara", "6.00", "Tomatoes, Garlic, Oregano "],
    ["Margherita", "6.00", "Tomatoes, Mozzarella"],
    ["Napoli", "7.00", "Tomatoes, Mozzarella, Sardines, Oregano"],
    ["Al Funghi", "8.00", "Tomatoes, Mozzarella, Mushrooms"],
    ["Al Prosciutto", "6.00", "Tomatoes, Mozzarella, Ham"],
    ["Al Prosciutto Crudo", "9.00", "Tomatoes, Mozzarella, Raw Ham"],
    ["Prosciutto E Funghi", "9.00", "Tomatoes, Mozzarella, Ham, Mushrooms"],
    ["Capricciosa", "7.00", "Tomatoes, Mozzarella, Spicy Salami, Mushrooms, Artichokes, Olives"],
    ["Quattro Stagioni", "7.00", "Tomatoes, Mozzarella, Ham, Mushrooms, Artichokes, Sea Food"],
    ["Alla Diavola", "12.00", "Tomatoes, Mozzarella, Spicy Salami"],
  ]

  foods.forEach((food, index) => {
    createFood(index + 1, food[0], food[1], food[2]);
  })


  return menuWrapper;
}

export default createMenu;