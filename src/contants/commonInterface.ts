import { ReactElement } from 'react'

export interface Header {
    title: string
}

export interface TooltipProps {
    children: ReactElement;
    label: string | ReactElement;
    p?: number;
}

export interface LeadListProps {
    id: string;
    firstName: string;
    lastName: string;
    companyDomain: string;
    linkedinUrl: string;
    invalidFields: Array<string>;
}
export interface StepProgressBarProps {
    color1?: string;
    color2?: string;
    color3?: string; 
    text?: string;
}

export interface Email {
	id: string;
	sender: string;
	email: string;
	subject: string;
	preview: string;
	timestamp: string;
	body: string;
};

export interface EmailListProps {
	emails: Array<{
		id: string;
		sender: string;
		email: string;
		subject: string;
		preview: string;
		timestamp: string;
		avatar?: string;
	}>;
	onSelectEmail: (email: any) => void;
	onDeleteEmail: (emailId: string) => void;
};