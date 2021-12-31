export default function Permutations() {

    // without repetitions
    const getPermutations = (options:  number[] | string[] ) => {
        const permutations = [];
        if (options.length === 1) {
            return [options]
        }
        const partialPermutations = getPermutations(options.slice(1));
        const firstOptions = options[0];
        for (let i = 0; i < partialPermutations.length; i++) {
            const partialPermutation = partialPermutations[i];

            for (let j = 0 ; j <= partialPermutation.length; i++){
                const permutationInFront = partialPermutation.slice(0,j);
                const permutationAfter = partialPermutation.slice(j);
                permutations.push(permutationInFront.concat([firstOptions],permutationAfter))
            };
        }
    }

    const x = getPermutations([3,4,5,6])
    console.log(x)



    return (
        <div>
            open the consol
        </div>
    )
}