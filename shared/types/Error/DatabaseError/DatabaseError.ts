/**
 * Represents the possible operations in the database.
 */
export type DatabaseErrorName = 'AddError' | 'GetError' | 'UpdateError' | 'RemoveError'

/**
 * Represents the possible models in the database.
 */
type Model = 'ExchangeRate' | 'LeonPaulProduct'

/**
 * Represents the context object when throwing a DatabaseError.
 */
export type DatabaseErrorContext = {
    model: Model
}
