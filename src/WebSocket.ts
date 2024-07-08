import { ServiceFactory } from './factories/ServiceFactory';
import { Server, Socket } from 'socket.io';
import { ConnectionDTO } from './models/Socket';
import { ConnectionsUtil } from './utils/ConnectionsUtil';
import { AuthService } from './services/AuthService';

class WebSocket {
    private server: Server;
    private connections: Array<ConnectionDTO> = [];
    private authService: AuthService;

    constructor(server: Server) {
        this.server = server;
        this.authService = ServiceFactory.getAuthService();
        this.initWebSocket();
    }
    private initWebSocket = async () => {
        this.server.on('connection', (socket) => {
            this.handleConnection(socket);
            socket.on('disconnect', () => {
                //this.handleDisconnect(socket);
            });
        });
    }
    
    private async authenticateUser(socket: Socket) {
        return await this.authService.serverAuth(socket.handshake.auth.token || socket.handshake.headers.authorization);
    }

    public async handleConnection(socket: Socket, ...args: any[]): Promise<void> {
        const authState = await this.authenticateUser(socket);
        if (!authState.isSuccessfullExecution) {
            console.log('Cant authenticate!');
            socket.disconnect();
            return;
        }
        const connection = this.connections.find(ConnectionsUtil.findByUserId(authState.result.id));
        if (!connection) {
            const connection = new ConnectionDTO();
            connection.userId = authState.result.id;
            connection.sockets.push(socket);
            this.connections.push(connection);
        } else {
            connection.sockets.push(socket);
        }
        console.log('User ' + authState.result.id + ' connected. ip:'+ socket.handshake.address);
    }

    public SendShares(Shares: any) {
        this.connections.forEach(conn => {
            conn.sockets.forEach( socket => {
                socket.emit('shares', Shares);
            })
        })
    }
}

export default WebSocket;
