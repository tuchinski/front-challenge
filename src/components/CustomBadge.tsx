interface CustomBadgeProps{
    badgeText: string,
    type: "drawDate" | "drawNumber"
}

export default function CustomBadge({ badgeText, type }: CustomBadgeProps) {
    const colorVariants = {
        drawDate: 'text-badge-blue bg-badge-blue/20',
        drawNumber: 'border-1 bg-transparent text-badge-green'
      }
    //   const fontSizeVariants = {
    //     xs: 'px-1 text-xs',
    //     sm: '',
    //     base: 'px-3 text-base',
    //   }
    
    return(
        <>
            <button className={`h-auto w-max mx-2.5 rounded-4xl ${colorVariants[type]}
                px-2 text-sm font-normal`}>
                {badgeText}
            </button>
        </>
    )
    
}