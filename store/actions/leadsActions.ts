import { collection, getDocs } from 'firebase/firestore';
import { LeadListProps } from '@/contants/commonInterface';
import { FETCH_LEADS_FAILURE, FETCH_LEADS_REQUEST, FETCH_LEADS_SUCCESS } from './leadActionsTypes';
import { db } from '../../firbaseConfig';

export const fetchLeadsRequest = () => {
  return { type: FETCH_LEADS_REQUEST };
};

export const fetchLeadsSuccess = (leads: LeadListProps[]) => {
  return { type: FETCH_LEADS_SUCCESS, payload: leads };
};

export const fetchLeadsFailure = (error: string) => {
  return { type: FETCH_LEADS_FAILURE, payload: error };
};

export const fetchLeads = () => {
  return async (dispatch: any) => {
    dispatch(fetchLeadsRequest());
    try {
      const leadsCollection = collection(db, 'Leads');
      const leadSnapshot = await getDocs(leadsCollection);
      const leadsList = leadSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          companyDomain: data.companyDomain || '',
          linkedinUrl: data.linkedinUrl || '',
          invalidFields: data.invalidFields || [],
        };
      });
      dispatch(fetchLeadsSuccess(leadsList));
    } catch (error: any) {
      dispatch(fetchLeadsFailure('Error fetching leads: ' + error.message));
    }
  };
};
