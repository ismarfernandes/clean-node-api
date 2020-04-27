import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const response: HttpResponse = {
      statusCode: 400,
      body: new Error()
    }

    if (!httpRequest.body.name) {
      response.body = new MissingParamError('Missing param: name')
    }
    if (!httpRequest.body.email) {
      response.body = new MissingParamError('Missing param: email')
    }

    return response
  }
}
