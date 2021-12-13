export default function Prime() {

    // const isPrime = (n: number) => {
    //     for (let i = 2; i < n; i++) {
    //         if (n % i === 0) { // o(n)
    //             return false
    //         }
    //     }
    //     return true
    // }


    const isPrime = (n: number) => {
        for (let i = 2; i < Math.sqrt(n); i++) {
            if (n % i === 0) { // o(sqrt(n))
                return false
            }
        }
        return true
    }


    return (
        <div>
            open the consolooo
        </div>
    )
}