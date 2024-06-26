import { useEffect, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

import Link from "next/link";
import { useCommonData } from "@/hooks/commonDataHook";
import Loader from "../common/loading";
import DonutChart from "components/chart/donutChart";

export default function Guide() {
  const [steps, setSteps] = useState(0);
  const { data, loading, error } = useCommonData();

  const todo = [
    {
        title: "Add your Institute",
        link: "/institute",
    },
    {
      title: "Create your first course",
      link: "/course",
    },
    {
      title: "Add your staff",
      link: "/staff",
    },
    {
      title: "Create your first batch",
      link: "/batch",
    },
    {
      title: "Add your Students",
      link: "/students",
    },
    {
      title: "Start Attendance",
      link: "/attendance",
    },
  ];

  useEffect(() => {
    if (data) {
      setSteps(data.steps+1);
    }
  }, [data]);

  const verifyCurrentStep = (step: number) => {
    if (step < steps) {
      return <BsFillCheckCircleFill className="text-green-500 mr-2 text-lg" />;
    } else {
      return (
        <BsFillArrowRightCircleFill className="text-orange-400 mr-2 text-lg" />
      );
    }
  };

  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm min-w-[320px]">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 p-6 pb-0">
        <h1 className="font-bold mb-4 text-center">Complete your setup</h1>
        <div className="flex justify-center">
          <DonutChart percentage={steps > 0 ? Math.round(steps * 16.6) : 0} />
        </div>
        <p className="text-sm text-center text-gray-500 my-4">
          Complete all 5 steps to start
        </p>
      </div>

      <div className="p-6 pt-0">
        {loading && <Loader />}
        {!loading && todo.map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-3">
            <div className="flex flex-row items-center  rounded-md cursor-pointer">
              {verifyCurrentStep(index)}
              <span
                className={
                  (steps > index ? "text-green-500 " : " text-[#DA8541] ") +
                  " antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium"
                }
              >
                <Link href={item.link}>{item.title}</Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
