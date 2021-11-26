export default function SumUp() {

    const sumUp = (n: number) => {
        let result = 0;
        for (let i = 1; i <= n; i++) {
            result += i;
        }
        return result;
    }

    const sumUpWithGoodPerf = (n:number) => {
        return (n / 2) * (1 + n);
    }


    return (
        <div>
            {sumUp(3)}
            <br/>
            {sumUpWithGoodPerf(3)}
        </div>
    )
}