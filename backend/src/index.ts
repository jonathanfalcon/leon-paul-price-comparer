import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { exchangeRateRoute } from './routes/exchangeRate'
import { database } from '../utils/database'

const app = new Hono()

database.connect()

exchangeRateRoute(app)

serve(app)
