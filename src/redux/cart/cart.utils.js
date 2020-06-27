export const addItemToCart = (items, newItem) => {
    const existingItem = items.find(item => item.id === newItem.id);
    
    if (existingItem) {
        return items.map(item =>
            item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    }

    return [ ...items, {...newItem, quantity: 1}]
}