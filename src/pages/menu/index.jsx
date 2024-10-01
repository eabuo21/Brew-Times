import { useEffect } from "react";
import Container from "@/components/Atoms/Menu-Atoms/Menu-Container/Container";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-[fixed] justify-start items-start  overflow-hidden  ">
      <Container />
    </div>
  );
};

export default HomePage;
