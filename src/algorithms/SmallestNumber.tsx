export default function SmallestNumber() {

    const getMin = (numbers: number[]) => {
        let currentMin = numbers[0]
        for (const num of numbers) { // O(n)
            if (num < currentMin) {
                currentMin = num
            }
        }
        return currentMin;
    }

    return (
        <div>
            open the consolo
        </div>
    )
}