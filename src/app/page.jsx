import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "./components/Socials";
import Photo from "./components/Photo";
import Status from "./components/Status";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Architectural engineer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Mahsa Jesri</span>
            </h1>
            <p className="max-w-[500px] xl:max-w-[522px] mb-9 text-white/80 text-center xl:text-justify">
              Architectural Engineer with a strong command of CAD, Revit, and
              BIM, specializing in crafting elegant, efficient design solutions
              that blend technical precision with architectural innovation.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Status/>
    </section>
  );
};

export default Home;
