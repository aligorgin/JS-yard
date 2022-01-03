export default function KnapsackProblem() {

    const knapsack: any = (items: any, cap: number, itemIndex: number) => {
        if (cap === 0 || itemIndex < 0) {
            return {items: [], value: 0, weight: 0};
        }
        if (cap < items[itemIndex].weight) {
            return knapsack(items, cap, itemIndex - 1);
        }
        const sackWithItem: any = knapsack(items, cap - items[itemIndex].weight, itemIndex - 1);
        const sackWithoutItem: any = knapsack(items, cap, itemIndex - 1);

        const valueWithItem = sackWithItem.value + items[itemIndex].value;
        const valueWithoutItem = sackWithoutItem.value;

        if (valueWithItem > valueWithoutItem) {
            return {
                items: sackWithItem.items.concat(items[itemIndex]),
                value: sackWithItem.value + items[itemIndex].value,
                weight: sackWithItem.weight + items[itemIndex].weight,
            }
        } else {
            return sackWithoutItem;
        }
    }

    const items = [
        {name: 'a', value: 3, weight: 3},
        {name: 'b', value: 6, weight: 8},
        {name: 'c', value: 10, weight: 3}
    ]

    const maxCap = 8;

    const sack = knapsack(items, maxCap, items.length - 1);
    console.log(sack)


    return (
        <div>
            hey there, open consolo
        </div>
    )
}