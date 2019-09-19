import * as request from 'request'

import * as requestPromise from 'request-promise-native'
import { URL } from 'url'

export class APIcustom{
    protected client = requestPromise
    private options: request.OptionsWithUri

    constructor(relativeURL: string) {
        // Hardcoded, but can be overrided
        const api_url = 'https://reqres.in'
        // Prepending with slash
        relativeURL = relativeURL.startsWith('/') ? relativeURL : '/' + relativeURL
        let concatenated = process.env.API_URL + relativeURL
    
        // initializing options object
        this.options = {
          uri: concatenated,
          method: 'GET' // Doing GET request by default
        }
    
        this.client = requestPromise.defaults({
          json: true, // sets body to JSON representation of value and adds Content-type: application/json header. Additionally, parses the response body as JSON - https://github.com/request/request
          time: true, // For logging purposes
          resolveWithFullResponse: true, // To get full response, not just body
          followAllRedirects: true
        })
      }

      public method(method: 'POST' | 'GET'): APIcustom {
        this.options.method = method
        return this
      }

      public queryParameters(queryParameters: Object): APIcustom {
        // TODO: use Object.assign and do check for existence before
        this.options.qs = queryParameters
        return this
      }
}