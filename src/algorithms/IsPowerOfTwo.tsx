export default function IsPowerOfTwo() {
    const isPowerOfTwo = (num: number) => {
        if (num < 1) {
            return false;
        }
        let dividedNumber = num;
        while (dividedNumber !== 1){
            if (dividedNumber % 2 !== 0){
                return false
            }
            dividedNumber = dividedNumber /2;
        }
        return true;
    }

    console.log(isPowerOfTwo(4))
    console.log(isPowerOfTwo(423))
    console.log(isPowerOfTwo(16))
    console.log(isPowerOfTwo(1024))

    return (
        <div>
            open console
        </div>
    )
}