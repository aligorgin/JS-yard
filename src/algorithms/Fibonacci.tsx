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
    // const fib: any = (num: number) => {
    //     if (num === 0 || num === 1) {
    //         return 1;
    //     }
    //     return fib(num - 1) + fib(num - 2); // O(n^2) not good solution for this problem
    // }

    // recursive + memo
    let counter = 0;
    const fib: any = (n: number, memo: any) => {
        counter++;
        let result;

        if (memo[n]) {
            return memo[n];
        }
        if (n === 0 || n === 1) {
            result = 1;
        } else {
            result = fib(n - 1, memo) + fib(n - 2, memo); //O(n)
        }

        memo[n] = result;

        return result;
    }

    console.log(`fibonacci (8) : ${fib(8, {})}`);
    console.log(counter);
    counter = 0;
    console.log(`fibonacci (80) : ${fib(80, {})}`);
    console.log(counter);
    counter = 0;
    console.log(`fibonacci (30) : ${fib(30, {})}`);
    console.log(counter);
    counter = 0;



    return (
        <div>
            open the console
        </div>
    )
}