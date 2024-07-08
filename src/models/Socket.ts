import { Socket } from "socket.io";

export class ConnectionDTO {
    userId: string;
    sockets: Socket[] = [];
  }