import { AxiosRequestConfig } from "./types";

export default function xhr(config: AxiosRequestConfig): void {
   const {url, method = 'get', data = null, headers} = config;

   const request = new XMLHttpRequest();

   request.open(method.toUpperCase(), url, true);

   Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
         delete headers[name];
      }
      request.setRequestHeader(name, headers[name]);
   })

   request.send(data);
}