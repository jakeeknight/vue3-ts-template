import axios, { AxiosInstance } from "axios";

export interface IClientFactory {
  createApiClient(): AxiosInstance;
}

export class ClientFactory implements IClientFactory {
  public createApiClient(url?: string): AxiosInstance {
    return axios.create({
      baseURL: url ? url : process.env.VUE_APP_API_URL,
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
