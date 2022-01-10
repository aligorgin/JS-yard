export default function CartesianProduct() {
    const cartProduct = (setA: any, setB: string[]) => {
        const product = [];
        for (let setAEl of setA) {
            if (!Array.isArray(setAEl)) {
                setAEl = [setAEl];
            }
            for (const setBEl of setB) { // O(n*m) or O(n^2)
                product.push([...setAEl, setBEl]);
            }
        }
        return product;
    }

    const cartesian = (...sets: any[]) => {
        let tempProduct = sets[0];
        for (let i = 1; i < sets.length; i++) { // O(n^x) x is sets
            tempProduct = cartProduct(tempProduct, sets[i]);
        }
        return tempProduct
    }

    const colors = ['blue', 'red'];
    const sizes = ['m', 'l', 'xl', 's', 'lg'];
    const styles = ['round neck', 'v neck'];
    console.log(cartProduct(colors, sizes));
    console.log(cartesian(colors, sizes, styles));

    return (
        <div>
            open console
        </div>
    )
}