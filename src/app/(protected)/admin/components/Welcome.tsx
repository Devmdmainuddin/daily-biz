import {IWelcomeMessage} from "../types";

const info: IWelcomeMessage = {
  message: "Say! Hello Nexlent -  you are in protected route.",
};

const Welcome = () => {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center p-6">
      <h1 className="text-primary-700">{info.message}</h1>
      <p>A Smart Software Solutions.</p>
    </div>
  );
};

export default Welcome;
