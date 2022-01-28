import React from 'react';

function Animals({state, dispatch}) {
    return (
        state.map(item => {
            return (
                <div key={item.id} className={'d-flex border p-1'}>
                    <h4 className={'col-8 text-start p-2'}>{item.value}</h4>
                    <button onClick={()=> dispatch({type: 'remove', payload: {id: item.id}})} className={'col-4 btn btn-button border'}>Delete</button>
                </div>
            )
        })
    );
}

export default Animals;