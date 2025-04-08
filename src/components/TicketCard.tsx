import TicketInfo from "@/app/interfaces/TicketInfo";
import { transformCurrencyToSymbol } from "@/utils";
import { Trash } from "lucide-react";

interface TicketCardProps {
    ticketInfo: TicketInfo;
    pricing: boolean;
    onDelete?: (ticketId: string) => void;
    ticketNumber: number;
}

export default function TicketCard({ticketInfo, pricing, onDelete, ticketNumber}: TicketCardProps){
    const styles = {
        commonBallStyle: 'w-8 h-8 rounded-2xl px-3 py-1 text-white flex items-center justify-center',
        ticket: {
            background: `${ticketInfo.lotteryColor}20`,
            borderColor: `${ticketInfo.lotteryColor}99`
        },
        selectedNumbers: {
            background: ticketInfo.lotteryColor,
            borderColor: `${ticketInfo.lotteryColor}20`,
            color: 'white'
        }       
    }


    return (
        <>
            <div id="card" style={styles.ticket} className={`w-min-[260] h-min-[122] rounded-lg px-2 py-3 grid-cols-1 space-y-2 border-1 `} >
                <div className="flex justify-between text-neutral-600" >
                    <h1 className="text-sm">{`Ticket #${ticketNumber}`}</h1>
                    <h2 className="text-xs">{ticketInfo.lotteryName}</h2>
                </div>

                <div className="flex justify-between">
                    {
                        ticketInfo.numbersSelected.map((number) => {
                            return <h1 key={number} style={styles.selectedNumbers} className={`${styles.commonBallStyle}`}>{number}</h1>        
                        })
                    }
                </div>
                <div>
                    <h1 style={{borderColor: `${ticketInfo.lotteryColor}40`}} className={`border-1 border-dashed`}></h1>
                </div>
                <div hidden={pricing}>
                    <h2 className="text-neutral-600 text-xs flex justify-center">Good luck!</h2>
                </div>
                <div className="flex justify-between" hidden={!pricing}>
                    <h2 className="text-neutral-600 text-xs">
                        Ticket Cost: {transformCurrencyToSymbol(ticketInfo.ticketValue.currency)} {ticketInfo.ticketValue.amount.toFixed(2)}
                        </h2>
                    <Trash 
                        className="text-red-600 size-4 cursor-pointer" 
                        onClick={() => onDelete?onDelete(ticketInfo.id):undefined} 
                    />
                </div>
            </div>
        </>
    );
}