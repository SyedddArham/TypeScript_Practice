function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order Summary:");
    if (items.length > 0) {
        console.log("You ordered a sandwich with: ", items.join(', '));
    }
    else {
        console.log("You ordered an empty sandwich. Please add items.");
    }
}
order_sandwich('Ham', 'Cheese', 'Lettuce');
order_sandwich('Turkey', 'Swiss');
order_sandwich();
