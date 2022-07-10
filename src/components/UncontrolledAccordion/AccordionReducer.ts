export type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const AccordionReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {...state, collapsed: !state.collapsed}
        default:
            return state
    }
}