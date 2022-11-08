
type AppReducerActionType =
    | ReturnType<typeof ChangeValueAC>

type AppReducerStateType = {
    value: boolean
}
const initialState: AppReducerStateType = {
    value: false
}
export const AppReducer = (state: AppReducerStateType = initialState, action: AppReducerActionType):AppReducerStateType => {
    switch (action.type) {




        default:
            return state
    }
}

const ChangeValueAC = () => ({type: 'AppReducer/SOME-ACTION-TYPE' as const})