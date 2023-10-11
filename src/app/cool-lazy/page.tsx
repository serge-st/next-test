import { Suspense } from "react";
import { RegularServerComponent } from "./RegularServerComponent";
import { SlowServerComponent } from "./SlowServerComponent";

const page = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="text-2xl">This is a demo page for html streaming</h1>
            <RegularServerComponent />
            <Suspense fallback={<div>Doing heavy computations...</div>}><SlowServerComponent /></Suspense>
        </div>
    );
};

export default page;