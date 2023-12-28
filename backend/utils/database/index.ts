import { connect } from 'mongoose'
import { exchangeRate } from './access/exchangeRate'

const { DATABASE_URL } = process.env

const connectDb = async (): Promise<void> => {
    try {
        await connect(DATABASE_URL as string)
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
