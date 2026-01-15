export const elements = {
    addItemCart: (itemName) =>  `[data-test="add-to-cart-${TransformItemName(itemName)}"]`,
    removeItemCart: (itemName) => `[data-test="remove-${TransformItemName(itemName)}"]`,
}

function TransformItemName(name){
    return name.replaceAll(' ', '-').toLowerCase()
}