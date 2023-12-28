import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { exchangeRateRoute } from './routes/exchangeRate'

const app = new Hono()

exchangeRateRoute(app)

serve(app)
