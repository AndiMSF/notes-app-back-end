const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {

    // Setup Server
    const server = Hapi.server({
        port:5000,
        host:process.env.NODE_ENV !== 'production'? 'localhost' : '0.0.0.0',
        routes: {
            cors : {
                origin: ['*']
            },
        },
    })

    server.route(routes)

    // Server Running
    await server.start();
    console.log('Server berjalan di port '+server.info.uri);
}

init()