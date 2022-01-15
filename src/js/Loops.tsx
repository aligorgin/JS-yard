export default function Loops() {

    const names = ['alex', 'jesi', 'pinkman', 'walter white', 'wiffy'];

    for (let name of names) {
        console.log(name)
    }
    names.forEach((name, index) => {
        console.log('each', index, name)
    })


    return (
        <div>
            open console
        </div>
    )
}