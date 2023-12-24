import {
    DatabaseErrorName,
    DatabaseErrorContext,
} from '@leon-paul-price-comparer/types/Error/DatabaseError/DatabaseError'

/**
 * Base class for custom errors related to the database.
 *
 * @param name The name of the error.
 * @param context An object containing additional information about error.
 *
 * @extends Error
 *
 * @see DatabaseErrorName
 * @see DatabaseErrorContext
 */
export class DatabaseError extends Error {
    public context: DatabaseErrorContext

    constructor(name: DatabaseErrorName, context: DatabaseErrorContext) {
        super(name)
        this.context = context
    }
}
