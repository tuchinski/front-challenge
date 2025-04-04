'use client'
import CustomBadge from "@/components/CustomBadge";
import CustomButtom from "@/components/CustomButtom";
import DrawDetails from "@/components/DrawDetails";
import TicketCard from "@/components/TicketCard";
import TicketInfo from "./interfaces/TicketInfo";
import NumberSelection from "@/components/NumberSelection";
import CardDraw from "@/components/CardDraw";

const teste = () => {
  console.log("Button Clicked");
};

export default function Home() {
  const tickets: TicketInfo[] = [
    {numbersSelected: [1,3,5,6,7,8], ticketNumber: 1},
    {numbersSelected: [10,17,45,48,49,60], ticketNumber: 2},
    {numbersSelected: [10,17,45,48,49,60], ticketNumber: 3},
    {numbersSelected: [10,17,45,48,49,60], ticketNumber: 4},
    {numbersSelected: [10,17,45,48,49,60], ticketNumber: 5},
  ]

  return (
    <>
      <h1 className="">Start Page</h1>
      <div className="m-4">
        <CardDraw />
      </div>
      <div className="m-4">
        <NumberSelection qtdNumbersTicket={6} maxNumTicket={60} typeDraw="megaSena"/>
      </div>
      <div className="m-4">
        <CustomButtom buttonName="Teste" style="primary" onClick={teste} disabled={true}/>
      </div>
      <div className="m-4">
        <CustomBadge badgeText="Next draw: Tuesday, April 2" type="drawDate" />
        <CustomBadge badgeText="2/6" type="drawNumber"/>
      </div>
      <div className="m-4">
        <TicketCard 
          type="megaSena" ticketInfo={
            {numbersSelected: [12,3,53,6,7,10],
            ticketNumber: 1}
          }
        />
      </div>
      <div className="m-4">
        <DrawDetails tickets={tickets} jackpotValue="R$ 45 Millions" dateNextDraw="02/04/2025"/>
      </div>
    </>
  );
}
