import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  //define contrato
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  //buscando os dados
  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repositoryPodcast(queryString);

  //verifico tipo de resposta
  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };
  return responseFormat;
};
