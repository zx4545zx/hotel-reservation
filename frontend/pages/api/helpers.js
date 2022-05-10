import { apiCredential, apiUrl } from './variables'

export default function apiRequest(path, httpVerb, actionCallback, body) {
  const options = {
    method: httpVerb,
    headers: {
      'Content-Type': 'application/json',
      Authorization: apiCredential,
    },
  }
  if (body !== undefined) {
    options.body = body
  }

  fetch(apiUrl + path, options)
    .then((resp) => {
      if ([500, 501, 502, 503, 504].includes(resp.status)) {
        Router.replace('/500')
      }
      return resp.json()
    })
    .then((data) => actionCallback(data))
    .catch((err) => {
      console.log(err)
      window.location.replace('/500')
    })
}
