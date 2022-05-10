function getApiCredential() {
  const api_username = process.env.NEXT_PUBLIC_DORADORA_API_USERNAME
  const api_password = process.env.NEXT_PUBLIC_DORADORA_API_PASSWORD

  let b = Buffer.from(`${api_username}:${api_password}`)
  return 'Basic ' + b.toString('base64')
}

const apiCredential = getApiCredential()
const apiUrl = process.env.NEXT_PUBLIC_DORADORA_API_URL

export { apiCredential, apiUrl }
