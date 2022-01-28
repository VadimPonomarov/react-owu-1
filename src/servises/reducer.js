export const reducer = (state, action) => {

    switch (action.type) {
        case 'add': {
            return [...state,
                {
                    name: action.payload.name,
                    value: action.payload.value,
                    id: action.payload.id
                },
            ]
        }
        case "remove":
            return [...state.filter(item => item.id !== action.payload.id)]
        default:
            return new Error('Error')
    }
}