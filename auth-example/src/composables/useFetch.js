import { BASE_URL } from "../../utils/constants"

export const useFetch = async (endpoint, obj = {}) => {
  const uri = `${BASE_URL}/${endpoint}`

  const rawResponse = await fetch(uri, obj)

  const response = await rawResponse.json()

  return response
}
