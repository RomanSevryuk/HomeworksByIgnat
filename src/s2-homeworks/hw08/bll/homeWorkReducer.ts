import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedByName = [...state]
            if (action.payload === 'up')
                sortedByName.sort((a, b) => a.name > b.name ? 1 : -1)
            if (action.payload === 'down')
                sortedByName.sort((a, b) => a.name > b.name ? -1 : 1)
            // sort() создаёт новый массив? или нужно в ручную?...
            return sortedByName // need to fix
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter(el => el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
