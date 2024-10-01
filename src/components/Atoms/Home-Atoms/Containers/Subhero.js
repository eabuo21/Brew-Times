import React from "react";
import SubHeros from "@/components/shared/Atoms/SubHeros";

export default function Subhero() {
  const contents = [
    {
      title: "Our Delicious Offer",
      image:
        "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png",
      text: "Indulge in the finest selection of freshly brewed coffee and artisanal treats crafted to satisfy every craving. From rich espresso to buttery pastries, we’ve got something special just for you.",
    },
  ];
  return (
    <div className="w-full h-[fixed]">
      <SubHeros items={contents} />
    </div>
  );
}
