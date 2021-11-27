export default function Fibonacci() {

    // [1, 1, 2, 3, 5, 8, ...]

    const fib = (n: number) => {
        let numbers = [1, 1];
        for (let i = 2; i < n + 1; i++) {
            numbers.push(numbers[i - 2] + numbers[i - 1]) //o(n)
        }
        return numbers[n]
    }

    console.log(fib(2))

    return (
        <div>
            open the console
        </div>
    )
}