const currentDate = new Date ();
console.log(currentDate);
// const day = currentDate.getDay();
const day = 1
console.log(day);

if (day==0) {
    special_title.innerHTML = "$9 Deluxe Burger and Fries";
    document.getElementById("special_image").src = "images/sunday.jpg";
    special.description.innerHTML = "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side.";
}

else if (day==1) {
    special_title.innerHTML = "$12 Chicken Penne Alfredo";
    document.getElementById("special_image").src = "images/monday.jpg";
    special.description.innerHTML = "Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top. Side Caesar Salad included.";
}

else if (day==2) {
    special_title.innerHTML = "Tuesday - $10 Any Small Pizza";
    document.getElementById("special_image").src = "images/tuesday.jpg";
    special.description.innerHTML = "Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust.";
}

else if (day==3) {
    special_title.innerHTML = "Wednesday - 35¢ Chicken Wings";
    document.getElementById("special_image").src = "images/wednesday.jpg";
    special.description.innerHTML = "Our classic chicken wings come in three flavours – salt & pepper, honey garlic and extra hot. Minimum order is 20 wings – available in quantities of 10 after that.";
}

else if (day==4) {
    special_title.innerHTML = "Thursday - $9 Fish and Chips";
    document.getElementById("special_image").src = "images/thursday.jpg";
    special.description.innerHTML = "Authentic English style battered cod with a heaping helping of piping hot chips. Served with salt, vinegar and a curry sauce to flavor it to your taste. This dish is jolly good!";
}

else if (day==5) {
    special_title.innerHTML = "Friday - Half Price Cocktails All Day";
    document.getElementById("special_image").src = "images/friday.jpg";
    special.description.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it. Get a full sized Greek Salad at a great price.";
}

else if (day==6) {
    special_title.innerHTML = "$10 Jumbo Greek Salad";
    document.getElementById("special_image").src = "images/saturday.jpg";
    special.description.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it. Get a full sized Greek Salad at a great price.";
}


