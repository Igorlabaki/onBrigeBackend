import cors from "cors"
import "express-async-errors"
import { jobRoutes } from "./router/job"
import { authRoutes } from "./router/auth"
import { cityRoutes } from "./router/city"
import { areaRoutes } from "./router/area"
import { periodRoutes } from "./router/period"
import { companyRoutes } from "./router/company"
import { countryRoutes } from "./router/country"
import { developerRoutes } from "./router/developer"
import express, { NextFunction, Request, Response } from "express"

const app = express()

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))

app.use(express.json())

app.use('/job', jobRoutes)
app.use('/area', areaRoutes)
app.use('/auth', authRoutes)
app.use('/city', cityRoutes)
app.use('/period', periodRoutes)
app.use('/company', companyRoutes)
app.use('/country', countryRoutes)
app.use('/developer', developerRoutes)

/* app.use(
    (error: Error, req: Request,resp:  Response, next: NextFunction) => {
    return resp.json({
        status: "Error",
        message: error.message
    })
}) */


app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof Error) {
        return response.status(400).json({
          message: err.message,
        });
      }
      return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err}`,
      });
    }
) 


app.listen(3333,() => console.log("Server is running on port 3333"))