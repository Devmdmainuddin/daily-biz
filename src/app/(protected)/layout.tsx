import React, {ReactNode} from "react";
import {TheSidebar} from "./components";

const layout = ({children}: {children: ReactNode}) => {
  return (
    <main className="flex justify-between">
      <TheSidebar />
      {children}
    </main>
  );
};

export default layout;
