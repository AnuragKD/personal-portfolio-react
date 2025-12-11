export default function Buttonhex({
    children,
    className = "",
    ...props
}) {

    return (
        <button
            className={` relative w-fit ${className}`}
            {...props}
        >
            <svg className={`w-20 h-auto transition-all ${children ? " text-white drop-shadow-[0_0_1px_rgba(0,0,0,0.1)] hover:drop-shadow-[0_0_6px_rgba(84,129,79,0.4)]" :"text-[#fcfcfc]"}`} 
            xmlns="http://www.w3.org/2000/svg" width="680" height="725" viewBox="0 0 680 725" fill="none">
                <path d="M48.2143 575.851L280.58 707.771C320.424 730.538 358.594 730.874 399.107 707.771L631.473 575.851C662.611 558.105 679.686 540.025 679.686 491.477V230.985C679.686 183.775 662.276 166.7 633.819 150.293L400.781 17.704C359.264 -6.06888 319.42 -5.73317 278.906 17.704L45.87 150.293C17.41 166.7 0 183.775 0 230.985V491.477C0 540.025 17.0757 558.105 48.2143 575.851Z" fill="currentColor"/>
            </svg>

            <div className="absolute inset-0 flex justify-center items-center pointer-events-none p-6">
                {children}
            </div>
        </button>
    );
}
