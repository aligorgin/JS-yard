export default function InputGoogleAnimation() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='relative w-full sm:w-auto'>
                <input
                    className='mx-4 sm:mx-0 relative py-[13px] px-[15px] outline-none bg-transparent
                    h-[54px] w-[90%]
                    focus:border-[2px] sm:w-[366px] border-slate-500 border-[1px] rounded-[4px]
                    focus:outline-none focus:border-blue-600 transition-all duration-100 cursor-text peer'
                    type="text"
                    autoComplete='off'
                    id='email'
                />
                <label
                    className='peer-focus:left-[28px] absolute left-[35px] sm:left-[20px] top-1/2 text-[20px]
                    -translate-y-1/2 pointer-events-none peer-focus:text-[14px] peer-focus:top-0
                    peer-focus:bg-white peer-focus:px-1
                    transition-all duration-100 sm:peer-focus:left-[10px]'
                    htmlFor="email">
                    Email Address
                </label>
            </div>
        </div>
    )
}