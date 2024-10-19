import { checklistItems } from "../constants";
import codeImg from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";

const Workflow = () => {
  return (
    <div id="Workflow" className="mt-20">
        <h1 className="text-3xl text-center text-gray-300 mb-12">
        Streamline your VR development process with our <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">intuitive workflow.</span>
        </h1>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
            <img src={codeImg} alt="Code Image"/>
            </div>
            <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
                <div key={index} className="flex mb-12">
                    <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                        <CheckCircle2 />
                    </div>
                    <div>
                        <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                        <p className="text-md text-neutral-500">{item.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default Workflow;

