import axios, { AxiosInstance } from "axios";
import { HttpAdapater } from "./http.adapter";

interface Options {
    baseUrl: string;
    paramas: Record<string,string>;
}

export class AxiosAdapter implements HttpAdapater {

    private axiosInstance: AxiosInstance;

    constructor( options: Options ){
        this.axiosInstance = axios.create({
            baseURL: options.baseUrl,
            params: options.paramas,
        })
    }
        

    async get<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
        try {
            
            const { data } = await this.axiosInstance.get<T>(url, options); 

            return data;

        } catch (error) {
            throw new Error(`Error fetching get: ${ url }`);
            
        }
    }

}