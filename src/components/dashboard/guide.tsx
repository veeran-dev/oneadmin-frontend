import Image from 'next/image'
import { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { BsExclamationCircle } from 'react-icons/bs';
import RightArrow from '../../assets/rightArrow.json'
import Lottie from "lottie-react";
import Link from 'next/link';


export default function Guide({data}:any){

    const [steps, setSteps] = useState(0);
    const arrowStyle ={
        height: 18,
        width:18
    }

    const todo =[
        {
            'title': "Create your first course",
            "link": "/course"
        },
        {
            'title': "Add your staff",
            "link": "/staff"
        },
        {
            'title': "Create your first batch",
            "link": "/batch"
        },
        {
            'title': "Add your Students",
            "link": "/students"
        },
        {
            'title': "Start Attendance",
            "link": "/attendance"
        },
    ]

    const verifyCurrentStep = (step:number) => {
        if (step < steps) {
          return <BsFillCheckCircleFill className="text-[#DAF7A6] mr-2 text-lg" />;
        } else {
          return <div className='mr-2'> <Lottie animationData={RightArrow} style={arrowStyle} /> </div>
        }
    };

    return(
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm min-w-[320px]">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 p-6 pb-0">
                <h1 className="font-bold mb-4 text-center">Complete your setup</h1>
                <div className='flex justify-center'>
                    <Image
                        src="/lighthouse.png"
                        alt="guide"
                        width={64}
                        height={64}
                    />
                </div>
                <p className="text-sm text-center text-gray-500 my-4">
                    Complete all 3 steps to start
                </p>
            </div>
            
            <div className="p-6 pt-0">
                {todo.map((item, index) => 
                    <div className="flex items-start gap-4 p-3">
                        <div className="flex flex-row items-center  rounded-md cursor-pointer">
                            {verifyCurrentStep(index)}
                            <span className={(steps > index ? "text-[#A1C48C] ":" text-[#DA8541] ")+" antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium"}>
                                <Link href={item.link} >{item.title}</Link>
                            </span>
                        </div>
                    </div>   
                )}
            </div>
        </div>

    )
}