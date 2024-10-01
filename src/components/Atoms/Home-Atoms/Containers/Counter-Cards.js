import React from "react";
import Counters from "@/components/shared/Atoms/Card-Atoms/Counters";

export default function CounterCards() {
  const counter_data = [
    {
      value: 250,
      title: "Hours of Brewing",
      text: "Crafting the perfect cup with dedication.",
    },
    {
      value: 321,
      title: " Markets Served",
      text: "Serving quality coffee across 300 markets.",
    },
    {
      value: 220,
      title: "Exclusive  Brands",
      text: "Offering a selection from 220 premium brands.",
    },
    {
      value: 500,
      title: "Happy Customers",
      text: "Over 500 satisfied customers enjoy our brews.",
    },
  ];

  return (
    <div className="w-full h-[fixed]">
      <Counters counters_cards={counter_data} />
    </div>
  );
}
