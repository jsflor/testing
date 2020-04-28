export const createStore = () => {
    const fruits = [];
    return {
        addFruits: (fruit) => fruits.push(fruit),
        getFruits: () => fruits
    };
};