import { ExchangeRate } from '@leon-paul-price-comparer/types'
import { Schema, model } from 'mongoose'

/**
 * Defines the schema for the ExchangeRate model.
 */
const exchangeRateSchema = new Schema<ExchangeRate>({
    exchangeRate: {
        type: {
            AUD: {
                AUD: { type: 1, required: true },
                CAD: { type: Number, required: true },
                EUR: { type: Number, required: true },
                GBP: { type: Number, required: true },
                UAH: { type: Number, required: true },
                USD: { type: Number, required: true },
            },
            CAD: {
                AUD: { type: Number, required: true },
                CAD: { type: 1, required: true },
                EUR: { type: Number, required: true },
                GBP: { type: Number, required: true },
                UAH: { type: Number, required: true },
                USD: { type: Number, required: true },
            },
            EUR: {
                AUD: { type: Number, required: true },
                CAD: { type: Number, required: true },
                EUR: { type: 1, required: true },
                GBP: { type: Number, required: true },
                UAH: { type: Number, required: true },
                USD: { type: Number, required: true },
            },
            GBP: {
                AUD: { type: Number, required: true },
                CAD: { type: Number, required: true },
                EUR: { type: Number, required: true },
                GBP: { type: 1, required: true },
                UAH: { type: Number, required: true },
                USD: { type: Number, required: true },
            },
            UAH: {
                AUD: { type: Number, required: true },
                CAD: { type: Number, required: true },
                EUR: { type: Number, required: true },
                GBP: { type: Number, required: true },
                UAH: { type: 1, required: true },
                USD: { type: Number, required: true },
            },
            USD: {
                AUD: { type: Number, required: true },
                CAD: { type: Number, required: true },
                EUR: { type: Number, required: true },
                GBP: { type: Number, required: true },
                UAH: { type: Number, required: true },
                USD: { type: 1, required: true },
            },
        },
        required: true,
    },
    lastFetch: { type: Number, required: true },
})

/**
 * Model for ExchangeRate.
 * @see ExchangeRate
 */
export const ExchangeRateModel = model<ExchangeRate>('ExchangeRate', exchangeRateSchema)
