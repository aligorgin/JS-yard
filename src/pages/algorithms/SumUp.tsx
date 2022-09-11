export default function SumUp() {

    // const sumDown = (n: number) => {
    //     let result = 0;
    //     for (let i = 1; i <= n; i++) {
    //         result += i; // 0(n)
    //     }
    //     return result;
    // }

    // const sumTheseNumbers = (numbers: []) => {
    //     let result = 0;
    //     for (const number of numbers) { // to go throw all numbers
    //         result += number;  //o(n)
    //     }
    //     return result;
    // }


    const sumDown = (n: number) => {
        return (n / 2) * (1 + n); //o(1)
    }


    const sumTheseNumbers = (numbers: number[]) => {
        return numbers.reduce((sum, curNum) => sum + curNum, 0)
    }

    console.log(`43+43+42+5+6 = ${sumTheseNumbers([43,43,42,5,6])}`)


    return (
        <div>
            open the console
        </div>
    )
}