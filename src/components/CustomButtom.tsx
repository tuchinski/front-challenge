
interface CustomButtomProps{
    buttonName: string;
    style: 'primary' | 'secondary';
    onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

export default function CustomButtom({ buttonName, style, onClick }: CustomButtomProps){
    

    const colorVariants = {
        primary: 'bg-button-primary',
        secondary: 'bg-button-secondary'
    }

    console.log(style);
    return(
        <>
            <button 
                type="button"
                className={`${colorVariants[style]} text-white rounded-4xl p-2 w-36 
                            hover:opacity-80 transition`}
                onClick={onClick}
            >
                {buttonName}
            </button>
        </>
    );
}