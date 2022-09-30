import { Server } from "socket.io";

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.log("Socket.io already running");
  } else {
    console.log("Initializing socket.io");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log(`Client connected [id=${socket.id}] 🔥`);
      socket.on("message", (msg) => {
        console.log("Message received: " + msg);
        socket.broadcast.emit("update-message", msg);
      });
      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });
  }
  res.end();
};

export default SocketHandler;
