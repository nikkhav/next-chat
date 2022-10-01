import { Server } from "socket.io";
import connectDB from "../../../mongodb/database";
import User from "../../../mongodb/models/userModel";

export default async function SocketHandler(req: any, res: any) {
  if (req.method === "POST") {
    const { userId } = req.query;
    await connectDB();
    const user = await User.findById(userId);
    if (res.socket.server.io) {
      console.log("Socket.io already running");
    } else {
      console.log("Initializing socket.io");
      const io = new Server(res.socket.server);
      res.socket.server.io = io;

      io.on("connection", async (socket) => {
        console.log(`Client connected [id=${socket.id}] 🔥`);
        socket.on("message", (msg) => {
          console.log("User ID:", userId);
          console.log("Message received: " + msg);
          user.messages.push(msg);
          user.save();
          socket.broadcast.emit("update-message", msg);
        });
        socket.on("disconnect", () => {
          console.log("Client disconnected");
        });
      });
    }
    res.end();
  }
}
