import TicketInfo from "@/app/interfaces/TicketInfo";

interface TicketCardProps {
    ticketInfo: TicketInfo;
    color: string;
}

export default function TicketCard({ticketInfo, color}: TicketCardProps){
    const styles = {
        commonBallStyle: 'w-8 h-8 rounded-2xl px-3 py-1 text-white flex items-center justify-center',
        ticket: {
            background: `${color}20`,
            borderColor: `${color}99`
        },
        selectedNumbers: {
            background: color,
            borderColor: `${color}20`,
            color: 'white'
        }       
    }


    return (
        <>
            {/* <div id="card" className={`${styles[type]['cardBg']} ${styles[type].borderCard}  */}
            <div id="card" style={styles.ticket} className={`w-min-[260] h-min-[122] rounded-lg px-2 py-3 grid-cols-1 space-y-2 border-1 `} >
                <div className="flex justify-between text-neutral-600" >
                    <h1 className="text-sm">{`Ticket #${ticketInfo.ticketNumber}`}</h1>
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
                    <h1 style={{borderColor: `${color}40`}} className={`border-1 border-dashed`}></h1>
                </div>
                <div>
                    <h2 className="text-neutral-600 text-xs flex justify-center">Good luck!</h2>
                </div>
            </div>
        </>
    );
}