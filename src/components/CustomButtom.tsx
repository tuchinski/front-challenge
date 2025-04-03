
interface CustomButtomProps{
    buttonName: string;
    style: 'primary' | 'secondary';
    onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
    disabled: boolean;
    className?: string;
}

export default function CustomButtom({ buttonName, style, onClick, disabled, className}: CustomButtomProps){
    

    const colorVariants = {
        primary: 'bg-button-primary',
        secondary: 'bg-button-secondary'
    }

    console.log(style);
    return(
        <>
            <button 
                type="button"
                className={`${colorVariants[style]} text-white rounded-4xl p-2  
                            hover:opacity-80 transition disabled:opacity-50 ${className}`}
                onClick={onClick}
                disabled={disabled}
            >
                {buttonName}
            </button>
        </>
    );
}