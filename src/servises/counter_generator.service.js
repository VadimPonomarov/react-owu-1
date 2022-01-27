import Counter from '../components/counter/Counter'

const counterGenerator = (num, initialState, state, dispatch) => {
    const counterArr = []

    for (let i = 0; i < num; i++) {
        counterArr.push(<Counter index={i} state={state} dispatch={dispatch}/>)
        initialState[`counter${i}`] = 0
    }
    return counterArr
}

export default counterGenerator