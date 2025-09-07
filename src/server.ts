import * as http from 'http';
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    //queryString
    const [baseURL, queryString] = request.url?.split("?") ?? ["", ""];

    if (request.method === HttpMethod.GET && baseURL === Routes.LIST) {
      await getListEpisodes(request, response);
    }
    if (request.method === HttpMethod.GET && baseURL === Routes.EPISODE) {
      await getFilterEpisodes(request, response);
    }
  }
);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`servidor iniciado na porta ${port}`);
});