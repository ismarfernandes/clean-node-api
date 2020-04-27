import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('Missing param: name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('Missing param: email'))
    }

    return {
      statusCode: 400,
      body: {}
    }
  }
}
