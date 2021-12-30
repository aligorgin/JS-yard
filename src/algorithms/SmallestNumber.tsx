export default function SmallestNumber() {

    const getMin = (numbers:number[]) => {
        let currentMin = numbers[0]
        for (const num of numbers) { // O(n)
            if (num < currentMin) {
                currentMin = num
            }
        }
        return currentMin;
    }

    console.log(getMin([3,4,4,5,234,535345345,34534523452345,234523452345,234523452345,1]));

    return (
        <div>
            open the consolo
        </div>
    )
}