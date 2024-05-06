import {MainBanner} from "@/components/MainBanner";
import {HowItWorks} from "@/components/HowItWorks";
import {IncreaseYourIncome} from "@/components/IncreaseYourIncome";
import {Reviews} from "@/components/Reviews";
import {GetInTouch} from "@/components/GetInTouch";

export default function Home() {
    return (
        <div className={"flex flex-col p-4 bg-slate-50"}>
            <MainBanner/>
            <HowItWorks/>
            {/*<IncreaseYourIncome/>*/}
            {/*<Reviews/>*/}
            {/*<GetInTouch/>*/}
        </div>
    );
}
