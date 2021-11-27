export default function Prime() {

    const isPrime = (n: number) => {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            }
        }
        return true
    }

    console.log(isPrime(11))
    console.log(isPrime(12))
    console.log(isPrime(53))


    return (
        <div>
            open the consolooo
        </div>
    )
}