import { Socket } from 'socket.io';
import { ConnectionDTO } from '../models/Socket';


export class ConnectionsUtil {

  public static findByUserId(id: string): (connection: ConnectionDTO) => boolean {
    return (connection): boolean => connection.userId == id;
  }

  public static findBySocket(socket: Socket): (connection: ConnectionDTO) => boolean {
    return (connection): boolean => connection.sockets.find((knownSocket) => knownSocket.id == socket.id) != null;
  }


}
