import React from 'react';

import Animals from '../../components/animals/Animals'
import InputForm from '../../components/forms/InputForm'

function AppDetails({dispatch, state}) {

    return (
        <div className={'offset-2 col-8 d-flex flex-wrap border mt-2 m-auto justify-content-center'}>
            <div className={'col-6'}>
                <InputForm name={'cat'} dispatch={dispatch}/>
            </div>
            <div className={'col-6'}>
                <InputForm name={'dog'} dispatch={dispatch}/>
            </div>
            <div className={'col-6'}>
                <Animals state={state.filter(item => item.name === 'cat')} dispatch={dispatch}/>
            </div>
            <div className={'col-6'}>
                <Animals state={state.filter(item => item.name === 'dog')} dispatch={dispatch}/>
            </div>
        </div>
    );
}

export default AppDetails;