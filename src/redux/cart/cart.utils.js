export const addItemToCart = (items, newItem) => {
    const existingItem = items.find(item => item.id === newItem.id);
    
    if (existingItem) {
        return items.map(item =>
            item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    }

    return [ ...items, {...newItem, quantity: 1}]
}

export const removeItemFromCart = (items, itemToRemove) => {
    const foundItem = items.find(item => item.id === itemToRemove.id);

    if (foundItem.quantity === 1) {
        return items.filter(item => item.id !== itemToRemove.id);
    }

    return items.map(item => 
        item.id === itemToRemove.id ? 
        { ...item, quantity: item.quantity -1} : item );
}