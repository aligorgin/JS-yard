export default function Permutations() {

    // without repetitions
    const getPermutations = (options: number[] | string[number] | { name: string; value: number; weight: number; }[]) => {
        const permutations = [];
        if (options.length === 1) {
            return [options];
        }
        const partialPermutations: any = getPermutations(options.slice(1));
        const firstOption = options[0];
        for (let i = 0; i < partialPermutations.length; i++) {
            const partialPermutation = partialPermutations[i];

            for (let j = 0; j <= partialPermutation.length; j++) {
                const permutationInFront = partialPermutation.slice(0, j);
                const permutationAfter = partialPermutation.slice(j);
                permutations.push(permutationInFront.concat([firstOption], permutationAfter))
            }
        }

        return permutations;
    }

    const x = getPermutations([1, 3, 4, 5])
    console.log(x);

    return (
        <div>
            open the consol
        </div>
    )
}