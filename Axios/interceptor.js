// requisição
postFetch.interceptors.request.use(
    function (config) {
        console.log("Antes da requisição..")
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

// resposta
postFetch.interceptors.response.use(
    function (config) {
        console.log("Antes da requisição..")
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)