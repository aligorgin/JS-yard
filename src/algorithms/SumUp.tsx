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
    //     for (const number of numbers) {
    //         result += number;  //o(m)
    //     }
    //     return result;
    // }


    const sumDown = (n: number) => {
        return (n / 2) * (1 + n); //o(1)
    }


    const sumTheseNumbers = (numbers: []) => {
        return numbers.reduce((sum, curNum) => sum + curNum, 0)
    }


    return (
        <div>
            open the console
        </div>
    )
}