import { HttpResponse, HttpRequest } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const response: HttpResponse = {
      statusCode: 400,
      body: new Error()
    }

    if (!httpRequest.body.name) {
      response.body = new Error('Missing param: name')
    }
    if (!httpRequest.body.email) {
      response.body = new Error('Missing param: email')
    }

    return response
  }
}
