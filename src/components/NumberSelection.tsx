import { ReactNode } from "react";
import CustomBadge from "./CustomBadge";
import CustomButtom from "./CustomButtom";

interface NumberSelectionProps{
    qtdNumbersTicket: number,
    maxNumTicket: number,
    typeDraw: "megaSena" | "powerball" | "superEnalotto"
}

export default function NumberSelection({qtdNumbersTicket, maxNumTicket} : NumberSelectionProps){
    const styleNumbers = 'size-8 rounded-2xl flex items-center justify-center border-1';
    const styles = {
        numberNotSelected: `bg-white text-neutral-500 border-bg-icon2-header ${styleNumbers}`,
        megaSena: 'border-megasena-border-bg bg-megasena-ball-bg text-white',
        poweball: 'border-powerball-border-bg bg-powerball-ball-bg text-white',
        superEnalotto: 'border-superEnalotto-border-bg bg-superEnalotto-ball-bg text-white'
        
    }
    const numbers: ReactNode[] = [];
    for (let i = 1; i <= maxNumTicket; i++) {
        numbers.push(<h1 key={i} id={i.toString()} className={styles.numberNotSelected}>{i}</h1>);        
    }

    return (
        <div className="grid grid-col gap-6 border-1 border-border-header rounded-3xl p-6 bg-white w-[370] sm:w-[630]">
            <div className="grid gap-6">
                <div className="flex justify-between">
                    <ul>
                        <li className="text-sm  text-neutral-800 font-semibold">Select your numbers</li>
                        <li className="text-xs text-neutral-600 ">Choose {qtdNumbersTicket} numbers to create your ticket</li>
                    </ul>
                    <CustomBadge color="green">
                        <span>0/6</span>
                    </CustomBadge>
                </div>
                <div className="grid gap-2 grid-cols-9 sm:grid-cols-12">
                    {
                        numbers.map((number) => {
                            return number;
                        })
                    }
                </div>
            </div>
            <div className="flex justify-between">
                <CustomButtom className="w-32" style="secondary" disabled={false} buttonName="Quick Pick" />
                <CustomButtom className="w-32" style="primary" disabled={true} buttonName="Add" />
            </div>
        </div>
    );

}