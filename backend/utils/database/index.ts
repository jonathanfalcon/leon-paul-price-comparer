import { connect } from 'mongoose'
import { exchangeRate } from './access/exchangeRate'

const connectDb = async (databaseURL: string) => {
    try {
        await connect(databaseURL)
        console.log('Successfully connected!')
    } catch (error) {
        console.error('Unsuccessfully Connection:', error)
        throw error
    }
}

export const database = {
    connect: connectDb,
    exchangeRate,
}
