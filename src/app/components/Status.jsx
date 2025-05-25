"use client";

import CountUp from "react-countup";

const status = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 25,
    text: "Projects completed",
  },
  {
    num: 3,
    text: "Technologies mastered",
  },
  {
    num: 35,
    text: "freelance projects",
  },
];

const Status = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {status.map((item, index) => {
          return (
            <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start ">
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Status;
