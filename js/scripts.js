function Pizza (size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

var testPizza = new Pizza("large", "Pepperoni")

Pizza.prototype.createSize = function() {

}
Pizza.prototype.createToppings = function() {

}

Pizza.prototype.orderPrompt =  function() {
    return "Your " + this.size + " pizza with " + this.toppings + " has been ordered.";
}


// User Interface Logic


