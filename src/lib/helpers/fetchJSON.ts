import { camelizeKeys } from '$lib/utils';

interface FetchOptions {
  body?: any,
  method?: string
}

export default function fetchJSON(url: string, options: FetchOptions = {}) {
  return new Promise((resolve, reject) => {
    if (options.body) {
      options.body = JSON.stringify(options.body);
    }

    fetch(url, options)
      .then(response => new Promise((innerResolve, innerReject) => {
        response.json()
          .then((json) => {
            if (json instanceof Array) {
              innerResolve({ statusCode: response.status, data: json });
            } else {
              innerResolve({ statusCode: response.status, ...json });
            }
          }, (err) => {
            innerReject(err);
          })
          .catch((err) => {
            innerReject(err);
          });
      }))
      .then((jsonResponse: any) => {
        if (jsonResponse.statusCode >= 200 && jsonResponse.statusCode <= 299) {
          resolve(camelizeKeys(jsonResponse));
        } else {
          reject(camelizeKeys(jsonResponse));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
