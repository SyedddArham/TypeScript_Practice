function order_sandwich(...items: string[]): void {
    console.log("Sandwich Order Summary:");
    if (items.length > 0) {
        console.log("You ordered a sandwich with: ",items.join(', '));
    } else {
        console.log("You ordered an empty sandwich. Please add items.");
    }
}

order_sandwich('Ham', 'Cheese', 'Lettuce');
order_sandwich('Turkey', 'Swiss');
order_sandwich(); 
