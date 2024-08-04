import React, { createContext, useContext } from "react";
import { io, Socket } from "socket.io-client";

export const WebSocketContext = createContext<Socket | null>(null);
export const useWebSocket = () => useContext(WebSocketContext)!;
export const socket = io("http://localhost:3000");

type WebSocketProviderProps = {
  children: React.ReactNode;
};

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
  children,
}) => {
  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};
