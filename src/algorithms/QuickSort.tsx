export default function QuickSort() {
    const sort: any = (arr: number[] | string[] | (number | string)[]) => {
        const copiedArray = [...arr];

        if (copiedArray.length <= 1) {
            return copiedArray;
        }

        const smallerElementsArray = [];
        const biggerElementsArray = [];
        const pivotElement: any = copiedArray.shift();
        const centerElementArray = [pivotElement];

        while (copiedArray.length) { // O(n*log n)
            const currentElement: any = copiedArray.shift();
            if (currentElement === pivotElement) {
                centerElementArray.push(currentElement);
            } else if (currentElement < pivotElement) {
                smallerElementsArray.push(currentElement);
            } else {
                biggerElementsArray.push(currentElement);
            }
        }

        const smallerElementsSortedArray = sort(smallerElementsArray);
        const biggerElementsSortedArray = sort(biggerElementsArray);
        return smallerElementsSortedArray.concat(centerElementArray, biggerElementsSortedArray)
    }

    const sortedArr = sort([-3, 4, 100, 34, 25, 64, 6, 2, -1203, 45, 34, 623, 42, 4]);
    console.log(sortedArr);


    return (
        <div>
            open console
        </div>
    )
}