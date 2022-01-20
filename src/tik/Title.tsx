export default function Title() {
    return (
        <div className='w-full h-screen bg-slate-900'>
            <div className='max-w-[26rem] h-full mx-auto pt-7'>
                <form>
                    <div className='flex'>
                        <input
                            className='p-2 w-4/5 focus:outline-none bg-slate-700 focus:bg-slate-500 transition rounded-md mr-5'
                            type="text"/>
                        <button className=' rounded-md bg-slate-500 flex-1 hover:scale-105 transition active:scale-95'>ADD</button>
                    </div>
                </form>
            </div>
        </div>

    )
}