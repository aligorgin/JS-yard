export default function SumUp() {

    // const sumDown = (n: number) => {
    //     let result = 0;
    //     for (let i = 1; i <= n; i++) {
    //         result += i; // 0(n)
    //     }
    //     return result;
    // }

    const sumDown = (n: number) => {
        return (n / 2) * (1 + n); //o(1)
    }
    console.log(sumDown(3))

    // const sumTheseNumbers = (numbers: []) => {
    //     let result = 0;
    //     for (const number of numbers) {
    //         result += number;  //o(m)
    //     }
    //     return result;
    // }

    const sumTheseNumbers = (numbers: []) => {
        return numbers.reduce((sum, curNum) => sum + curNum, 0)
    }

    console.log(sumTheseNumbers([10, 10, 10, 3]))


    return (
        <div>
            open the console
        </div>
    )
}