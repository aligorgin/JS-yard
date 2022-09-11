export default function Factorial() {

    // const fact = (num: number) => {
    //     let result = 1;
    //     for (let i = 2; i <= num; i++) { //O(n)
    //         result = result * i;
    //     }
    //     return result;
    // }

    // recursion
    const fact: any = (num: number) => {
        if (num === 1) {
            return 1;
        }
        return num * fact(num - 1); // O(n)
    }

    console.log(`7! : ${fact(7)}`);


    return (
        <div>open consolo</div>
    )
}