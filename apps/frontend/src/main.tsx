import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { reduxStore } from "store";
import MantineProvider from "ui/MantineProvider";
import SocketProvider from "ws-client/socket.provider";
import App from "./App";
import { GreycliffCF } from "./GreyCliffCF/GreyCliffCF.font";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <SocketProvider>
        <MantineProvider
          theme={{
            headings: { fontFamily: "Greycliff CF" },
            colorScheme: "dark",
          }}
        >
          <GreycliffCF />
          <App />
        </MantineProvider>
      </SocketProvider>
    </Provider>
  </React.StrictMode>
);
