import { ExchangeRateModel } from '../models/ExchangeRateModel'
import { fetchExchangeRate } from '../../data/fetch/fetchExchangeRate/fetchExchangeRate'
import { ExchangeRate } from '@leon-paul-price-comparer/types'
import { passedTime } from '@leon-paul-price-comparer/utils/functions/passedTime'
import { DatabaseError } from '../../exceptions/database/database'
import { WebScrapingError } from '../../exceptions'

const add = async (): Promise<void> => {
    const exchangeRate = await fetchExchangeRate()
    try {
        await ExchangeRateModel.create(exchangeRate)
    } catch (error) {
        throw new DatabaseError('AddError', { model: 'ExchangeRate' })
    }
}

const update = async (): Promise<void> => {
    const exchangeRate = await fetchExchangeRate()
    try {
        await ExchangeRateModel.replaceOne(exchangeRate)
    } catch (error) {
        throw new DatabaseError('UpdateError', { model: 'ExchangeRate' })
    }
}

const remove = async (): Promise<void> => {
    try {
        await ExchangeRateModel.deleteMany()
    } catch (error) {
        throw new DatabaseError('RemoveError', { model: 'ExchangeRate' })
    }
}

const get = async (): Promise<ExchangeRate> => {
    try {
        const exchangeRate = await ExchangeRateModel.findOne()

        if (!exchangeRate) {
            await add()
            return get()
        }

        if (passedTime(exchangeRate.lastFetch, { days: 3 })) {
            await update()
            return get()
        }

        return exchangeRate
    } catch (error) {
        if (error instanceof DatabaseError || error instanceof WebScrapingError) {
            throw error
        } else {
            throw new DatabaseError('GetError', { model: 'ExchangeRate' })
        }
    }
}

export const exchangeRate = {
    add,
    remove,
    update,
    get,
}
