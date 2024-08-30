import { LeadListProps } from '@/contants/commonInterface';
import { FETCH_LEADS_FAILURE, FETCH_LEADS_REQUEST, FETCH_LEADS_SUCCESS } from '../actions/leadActionsTypes';

interface LeadsState {
    leads: LeadListProps[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: LeadsState = {
    leads: [],
    status: 'idle',
    error: null,
};

const leadsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_LEADS_REQUEST:
            return { ...state, status: 'loading', error: null };
        case FETCH_LEADS_SUCCESS:
            return { ...state, status: 'succeeded', leads: action.payload };
        case FETCH_LEADS_FAILURE:
            return { ...state, status: 'failed', error: action.payload };
        default:
            return state;
    }
};

export default leadsReducer;
