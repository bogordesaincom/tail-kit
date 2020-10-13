export type State = {
  highlightedIndex: number
  open: boolean
}

export const initialState: State = {
  highlightedIndex: 0,
  open: false,
}

export enum ActionType {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  TOGGLE = 'TOGGLE',
  HIGHLIGHT = 'HIGHLIGHT',
}

type OpenAction = {
  type: ActionType.OPEN
  payload: {
    selectedOptionIndex: number
  }
}

type CloseAction = {
  type: ActionType.CLOSE
}

type ToggleAction = {
  type: ActionType.TOGGLE
}

type HightlightAction = {
  type: ActionType.HIGHLIGHT
  payload: {
    index: number
  }
}

type SelectAction = {
  type: ActionType.HIGHLIGHT
  payload: {
    index: number
  }
}

export type Action = OpenAction | CloseAction | ToggleAction | HightlightAction

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.OPEN: {
      return {
        highlightedIndex:
          action.payload.selectedOptionIndex === -1
            ? 0
            : action.payload.selectedOptionIndex,
        open: true,
      }
    }

    case ActionType.CLOSE: {
      return {
        ...state,
        open: false,
      }
    }

    case ActionType.TOGGLE: {
      return {
        ...state,
        open: !state.open,
      }
    }

    case ActionType.HIGHLIGHT: {
      return {
        ...state,
        highlightedIndex: action.payload.index,
      }
    }

    default: {
      return state
    }
  }
}
