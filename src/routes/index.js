import newRoute from './newsRoute.js'
import siteRoute from './sitesRoute.js'

function route(app){
    app.use('/news',newRoute);
    app.use('/',siteRoute);
}

export default route;