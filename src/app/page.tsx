'use client'
import CustomBadge from "@/components/CustomBadge";
import CustomButtom from "@/components/CustomButtom";
import TicketCard from "@/components/TicketCard";

const teste = () => {
  console.log("Button Clicked");
};

export default function Home() {
  return (
    <>
      <h1 className="">Start Page</h1>
      <div className="m-4">
        <CustomButtom buttonName="Teste" style="primary" onClick={teste}/>
      </div>
      <div className="m-4">
        <CustomBadge badgeText="Next draw: Tuesday, April 2" type="drawDate"/>
        <CustomBadge badgeText="2/6" type="drawNumber"/>
      </div>
      <div className="m-0">
        <TicketCard type="powerball"/>
      </div>
    </>
  );
}
