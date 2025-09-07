import React from "react";
import { Poppins,Inter } from "next/font/google";
import Link from "next/link";


const popins = Poppins({
    weight:['400'],
    style: "normal",
    subsets: ['latin']

})
const inter = Inter({
    weight:['300'],
    style: "normal",
    subsets: ['latin']

})

const Hero: React.FC = () => {
    return (
        <main className={`w-screen box-border  flex justify-baseline sm:justify-center  sm:gap-4 gap-6 flex-col items-start sm:items-center h-screen  ${popins.className} p-6 sm:p-0`}>
            <h1 className="mt-10 sm:m-0 text-5xl sm:text-6xl">Smart Learning. <span className="text-[#00ADB5]">Secure Exams.</span></h1>
            <h1 className="text-4xl sm:text-5xl">Anytime, Anywhere</h1>
            <p className={ `${inter.className} my-6 text-md tracking-wider`}>EverLMS is the next-generation learning management system with AI-powered exam monitoring that ensures fairness and integrity</p>
            <div className="flex gap-4">
                <button className="bg-[#393E46] p-2"><h2><Link href={'/'}>Get Started</Link></h2></button>
                <button className="bg-[#00ADB5] p-2"><h2><Link href={'/'}>Request Demo</Link></h2></button>
            </div>
        </main>
    )
}

export default Hero;