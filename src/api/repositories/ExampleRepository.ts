import { AxiosResponse, AxiosInstance } from "axios";

export interface IExampleRepository {
  exampleGet(): Promise<AxiosResponse>;
}

const endpoint = "example";

export function createExampleRepository(
  api: AxiosInstance
): IExampleRepository {
  return {
    async exampleGet(): Promise<AxiosResponse> {
      return await api.get(endpoint);
    },
  };
}
