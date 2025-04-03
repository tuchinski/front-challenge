import TicketInfo from "@/app/interfaces/TicketInfo";

interface TicketCardProps {
    type: 'megaSena' | 'powerball' | 'superEnalotto';
    ticketInfo: TicketInfo;
}

export default function TicketCard({type, ticketInfo}: TicketCardProps){
    const styles = {
        megaSena:{
            ball:'bg-megasena-ball-bg',
            titleName: "MegaSena",
            cardBg: "bg-megasena-bg",
            borderCard: "border-megasena-border-bg"
        },
        powerball:{
            ball:'bg-powerball-ball-bg',
            titleName: "Powerball",
            cardBg: "bg-powerball-bg",
            borderCard: "border-powerball-border-bg"
        },
        superEnalotto:{
            ball:'bg-superEnalotto-ball-bg',
            titleName: "SuperEnalotto",
            cardBg: "bg-superEnalotto-bg",
            borderCard: "border-superEnalotto-border-bg"
        },
        commonBallStyle: 'w-8 h-8 rounded-2xl px-3 py-1 text-white flex items-center justify-center'
    }

    return (
        <>
            <div id="card" className={`${styles[type]['cardBg']} ${styles[type].borderCard} 
            w-[260] h-[122] rounded-lg px-2 py-3 grid-cols-1 space-y-2 border-1 `} >
                <div className="flex justify-between text-neutral-600" >
                    <h1 className="text-sm">{`Ticket #${ticketInfo.ticketNumber}`}</h1>
                    <h2 className="text-xs">{styles[type].titleName}</h2>
                </div>

                <div className="flex justify-between">
                    {
                        ticketInfo.numbersSelected.map((number) => {
                            return <h1 key={number} className={`${styles[type]['ball']} ${styles['commonBallStyle']}`}>{number}</h1>        
                        })
                    }
                </div>
                <div>
                    <h1 className={`border-1 border-dashed ${styles[type].borderCard}`}></h1>
                </div>
                <div>
                    <h2 className="text-neutral-600 text-xs flex justify-center">Good luck!</h2>
                </div>
            </div>
        </>
    );
}