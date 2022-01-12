export default function MergeSort() {

    const sort: any = (arr: number[] | string[] | (number | string)[]) => {
        if (arr.length < 2) {
            return arr;
        }
        if (arr.length === 2) {
            return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
        }
        const middle = Math.floor(arr.length / 2);
        const leftArray = arr.slice(0, middle);
        const rightArray = arr.slice(middle);

        const leftSortedArray = sort(leftArray);
        const rightSortedArray = sort(rightArray);

        const mergedArr = [];
        let leftArrIndex = 0;
        let rightArrIndex = 0;
        while (leftArrIndex < leftSortedArray.length || rightArrIndex < rightSortedArray.length) { // O(n*log n)
            if (leftArrIndex >= leftSortedArray.length || leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]) {
                mergedArr.push(rightSortedArray[rightArrIndex]);
                rightArrIndex++;
            } else {
                mergedArr.push(leftSortedArray[leftArrIndex]);
                leftArrIndex++;
            }
        }

        return mergedArr;
    }


    const sortedArr = sort([-3, 4, 100, 34, 25, 64, 6, 2, -1203, 45, 34, 623, 42, 4, 1424, 2.5]);
    console.log(sortedArr);

    return (
        <div>
            open console
        </div>
    )
}