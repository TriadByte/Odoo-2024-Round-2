// socketContext.tsx
import React, { createContext, useContext, useEffect, useRef, ReactNode, useState } from 'react';
import { io, Socket } from 'socket.io-client';

// interface SocketContextProps {
//     socket: Socket | null;
// }

const SocketContext = createContext<Socket | null>(null);

export const useSocket = (): Socket | null => {
    return useContext(SocketContext);
};

interface SocketProviderProps {
    children: ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const socketRef = useRef<Socket | null>(null);
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        socketRef.current = io('ws://127.0.0.1:5000', { path: '/sockets' }); // Update with your server URL

        socketRef.current.on('connect', () => {
            socketRef.current?.emit('handshake', "Hello from the client!");
            setSocket(socketRef.current);
        });

        socketRef.current.on('disconnect', () => {
            console.log('Disconnected from the server');
        });

        socketRef.current.on('connect_error', (err) => {
            console.log(err.message);
            console.log(err.name);
            console.log(err?.stack);
        });

        socketRef.current.on('responseHandshake', (data) => {
            // console.log('responseHandshake', data);
            data = data;
        });


    }, []);



    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
