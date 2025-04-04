interface CustomBadgeProps{

    children?: React.ReactNode,
    color: string
}

export default function CustomBadge({ children, color }: CustomBadgeProps) {

    
    return(
        <>
            <button style={{ color: color, backgroundColor: `${color}20` }} className={`h-auto w-max mx-2.5 rounded-4xl px-2 text-sm font-normal`}>
                {children}
            </button>
        </>
    )
    
}