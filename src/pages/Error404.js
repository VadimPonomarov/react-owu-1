import React from 'react';
import {Link} from "react-router-dom";

function Error404() {
    return (
        <div className={'card vh-100 d-flex justify-content-center'}>
            <div className={'d-flex col-12'}> <h1 className={'m-auto'}>Error404</h1></div>
            <h3 className={'d-flex col-12 justify-content-center'}><Link to={'/'}>На главную</Link></h3>
        </div>
    )
}

export default Error404;