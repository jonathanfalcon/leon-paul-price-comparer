import { Hono } from 'hono'
import { database } from '../../utils/database'

export const exchangeRateRoute = (app: Hono) =>
    app.get('/exchange-rate', async c => {
        c.header('Content-Type', 'application/json')

        try {
            const exchangeRate = await database.exchangeRate.get()
            c.status(200)
            return c.json(exchangeRate)
        } catch (error) {
            c.status(500)
            return c.json({
                name: error.constructor.name,
                type: error.message,
                context: error.context,
            })
        }
    })
