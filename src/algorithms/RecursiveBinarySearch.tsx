export default function RecursiveBinarySearch() {

    const findElement:any = (sortedArr: any[], element: number | string, offset: number) => {
        let startIndex = 0;
        let endIndex = sortedArr.length - 1;

        const middleIndex = Math.floor((endIndex - startIndex) / 2);

        if (element === sortedArr[middleIndex]) {
            return middleIndex + offset;
        }

        if (sortedArr[middleIndex] < element) {
            startIndex = middleIndex + 1;
            offset = offset + middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
        return findElement(sortedArr.slice(startIndex, endIndex + 1), element, offset) // O(log n)
    }
    const arr = [2, 4, 5, 7, 13, 15, 17, 33, 77, 86, 100, 121];
    console.log(findElement(arr, 7, 0))

    return (
        <div>
            open console
        </div>
    )
}


