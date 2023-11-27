import { server } from "./server.js";

const PORT = 8000;

server.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}/`);
});
