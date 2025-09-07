import * as http from "http";
import { HttpMethod } from "./utils/http-methods";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";


export const app =  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    //queryString
    const baseURL = request.url?.split("?")[0];

    if (request.method === HttpMethod.GET && baseURL === Routes.LIST) {
      await getListEpisodes(request, response);
    }
    if (request.method === HttpMethod.GET && baseURL === Routes.EPISODE) {
      await getFilterEpisodes(request, response);
    }
  }
