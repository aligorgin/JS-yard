interface Props {
    arr: any;
}

export default function Rows({arr}: Props) {

    console.log(arr)
    return (
        <div>
            {arr.forEach((value:any,index:number) => {
                return <div key={index}>
                    {value}
                </div>
            })}
        </div>
    )
}