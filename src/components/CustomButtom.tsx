
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
        primary: 'bg-button-primary text-white',
        secondary: 'bg-button-secondary text-neutral-800'
    }

    return(
        <>
            <button 
                type="button"
                className={`${colorVariants[style]} text-xs rounded-4xl p-2  
                            hover:opacity-80 transition disabled:opacity-50 ${className}`}
                onClick={onClick}
                disabled={disabled}
            >
                {buttonName}
            </button>
        </>
    );
}