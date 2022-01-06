export default function Fibonacci() {

    // [1, 1, 2, 3, 5, 8, ...]

    // const fib = (n: number) => {
    //     let numbers = [1, 1];
    //     for (let i = 2; i < n + 1; i++) {
    //         numbers.push(numbers[i - 2] + numbers[i - 1]) //O(n)
    //     }
    //     return numbers[n]
    // }

    // recursive
    const fib: any = (num: number) => {
        if (num === 0 || num === 1) {
            return 1;
        }
        return fib(num - 1) + fib(num - 2); // O(n^2) not good solution for this problem
    }

    console.log(`fibonacci (8) : ${fib(8)}`)

    return (
        <div>
            open the console
        </div>
    )
}