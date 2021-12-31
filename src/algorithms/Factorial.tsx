export default function Factorial() {

    const fact = (num: number) => {
        let result = 1;
        for (let i = 2; i <= num; i++) { //O(n)
            result = result * i;
        }
        return result
    }

    console.log(fact(3));


    return (
        <div>open consolo</div>
    )
}