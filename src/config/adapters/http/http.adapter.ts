
export abstract class HttpAdapater{
    
    abstract get<T>(url:string, options?: Record<string, unknown> ):Promise<T>;
    
}