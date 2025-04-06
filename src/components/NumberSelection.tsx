'use client';
import { Dispatch, MouseEvent, ReactNode, SetStateAction, useState } from "react";
import CustomBadge from "./CustomBadge";
import CustomButtom from "./CustomButtom";
import { generateRandomNumbers } from "@/utils";
import TicketInfo from "@/app/interfaces/TicketInfo";

interface NumberSelectionProps{
    qtdNumbersTicket: number,
    maxNumTicket: number,
    color: string,
    addTicketFunc: Dispatch<SetStateAction<TicketInfo[]>>
}



export default function NumberSelection({qtdNumbersTicket, maxNumTicket, color, addTicketFunc} : NumberSelectionProps){
    const [numbersSelected, setNumbersSelected] = useState<number[]>([]);

    const numbers: ReactNode[] = [];
    
    function addTicket() {
        addTicketFunc((prevTickets) => {
            const maxId = Math.max(0, ...prevTickets.map(ticket => ticket.ticketNumber));
            const newTicket: TicketInfo = { ticketNumber: maxId + 1, numbersSelected: numbersSelected };
            return [...prevTickets, newTicket];
        });
        setNumbersSelected([]);
    };
    

    const styleNumbers = 'size-8 rounded-2xl flex items-center justify-center border-1 select-none';
    const styles = {
        numberNotSelected: `bg-white text-neutral-500 border-bg-icon2-header ${styleNumbers}`,
        numberSelected: {
            background: color,
            borderColor: `${color}20`,
            color: 'white'
        }       
    }
    for (let i = 1; i <= qtdNumbersTicket; i++) {
        numbers.push(
            <h1 key={i} id={i.toString()} style={numbersSelected.includes(i) ? styles.numberSelected : undefined}
             className={`${styleNumbers} ${styles.numberNotSelected}`} onClick={toggleSelection}>{i}</h1>
        );        
    }

    function toggleSelection(e: MouseEvent<HTMLInputElement>){
        e.preventDefault();
        const target = e.target as HTMLElement;
        const number = parseInt(target.innerText);
        if(numbersSelected.includes(number)){
            setNumbersSelected(numbersSelected.filter((n) => n !== number))
        }else{
            if( numbersSelected.length < maxNumTicket) 
                setNumbersSelected([...numbersSelected, number]);
        }
    }

    function quickPick(){
        setNumbersSelected(generateRandomNumbers(1,qtdNumbersTicket,maxNumTicket))
    }
    

    return (
        <div className="grid grid-col gap-6 border-1 border-border-header rounded-3xl p-6 bg-white w-[370] sm:w-[630]">
            <div className="grid gap-6">
                <div className="flex justify-between">
                    <ul>
                        <li className="text-sm  text-neutral-800 font-semibold">Select your numbers</li>
                        <li className="text-xs text-neutral-600 ">Choose {maxNumTicket} numbers to create your ticket</li>
                    </ul>
                    <CustomBadge color={color}>
                        <span>{`${numbersSelected.length}/${maxNumTicket}`}</span>
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
                <CustomButtom className="w-32" style="secondary" disabled={false} onClick={quickPick} buttonName="Quick Pick" />
                <CustomButtom className="w-32" style="primary" disabled={maxNumTicket !== numbersSelected.length} buttonName="Add" onClick={addTicket} />
            </div>
        </div>
    );

}