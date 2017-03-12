import 'whatwg-fetch';

const fetchMiddleware = store => next => action => {

    if(!action.url || !Array.isArray(action.types)){
        return next(action);
    }

    const [LOADING, SUCCESS, ERROR] = action.types;

    // 请求开始
    next({
        type: LOADING,
        loading: true,
        ...action,
    });

    // 请求数据
    fetch( action.url, { params: action.params })
        .then( response =>{
            return response.json();
        }).then( result => {
            next({ 
                type: SUCCESS, 
                loading: false, 
                payload: result, 
            });
        }).catch( err => { 
            next({ 
                type: ERROR, 
                loading: false, 
                error: err, 
            }); 
        });

}

export default fetchMiddleware;