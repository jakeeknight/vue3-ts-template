import { AxiosInstance } from "axios";
import { ClientFactory, IClientFactory } from "./client/http";
import {
  createExampleRepository,
  IExampleRepository,
} from "./repositories/index";

interface IApiFactory {
  example: IExampleRepository;
}

export function createApiFactory(): IApiFactory {
  const factory: IClientFactory = new ClientFactory();
  const api: AxiosInstance = factory.createApiClient();

  return {
    example: createExampleRepository(api),
  };
}
