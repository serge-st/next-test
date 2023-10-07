import { ServerComponent } from "./ServerComponent";
import { Timer } from "./Timer";

const page = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <Timer>
                <ServerComponent/>
            </Timer>
        </div>
    );
};

export default page;