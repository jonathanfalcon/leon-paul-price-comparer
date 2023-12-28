import { ExchangeRate } from '../ExchangeRate/ExchangeRate'
import {
    ExchangeRateErrorName,
    ExchangeRateErrorDetails_Public,
    DatabaseErrorName,
    DatabaseErrorContext,
} from '@leon-paul-price-comparer/types/Error/'

/**
 * Explicitly define the response type for the exchange rate endpoint upon success.
 *
 * @see ExchangeRate
 */
type ExchangeRateResponse_Success = ExchangeRate

/**
 * Represent the response type for the exchange rate endpoint upon failure due to a fetchExchangeRate error.
 *
 * @property name The name of the error.
 * @property type The type of the error.
 * @property context An object containing additional information about error.
 *
 * @see ExchangeRateErrorName
 * @see ExchangeRateErrorDetails_Public
 */
type ExchangeRateResponse_Error_ExchangeRateError = { name: 'ExchangeRateError' } & (
    | {
          type: Extract<ExchangeRateErrorName, 'HttpError'>
          details: ExchangeRateErrorDetails_Public['HttpError']
      }
    | {
          type: Exclude<ExchangeRateErrorName, 'HttpError'>
          details: ExchangeRateErrorDetails_Public[Exclude<ExchangeRateErrorName, 'HttpError'>]
      }
)

/**
 * Represent the response type for the exchange rate endpoint upon failure due to a database operation error.
 *
 * @property name The name of the error.
 * @property type The type of the error.
 * @property context An object containing additional information about error.
 *
 * @see DatabaseErrorName
 * @see DatabaseErrorContext
 */
type ExchangeRateResponse_Error_DatabaseError = { name: 'DatabaseError' } & {
    type: DatabaseErrorName
    context: DatabaseErrorContext<'ExchangeRate'>
}

/**
 * Represent the response type for the exchange rate endpoint upon error.
 *
 * @see ExchangeRateResponse_Error_ExchangeRateError
 * @see ExchangeRateResponse_Error_DatabaseError
 */
type ExchangeRateResponse_Error =
    | ExchangeRateResponse_Error_ExchangeRateError
    | ExchangeRateResponse_Error_DatabaseError

/**
 * Represent the response type for the exchange rate endpoint.
 *
 * @see ExchangeRateResponse_Success
 * @see ExchangeRateResponse_Error
 */
export type ExchangeRateResponse = ExchangeRateResponse_Success | ExchangeRateResponse_Error
