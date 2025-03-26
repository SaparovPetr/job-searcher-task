export interface Ivsc {
	gitHub: {
		nickname: string;
		subscribers: string;
	};
	gitLab: {
		nickname: string;
		subscribers: string;
	};
}

export interface IFormState {
	id: string;
	jobTitle: string;
	fullName: string;
	email: string;
	phoneNumber: string;
	currentDate: string;
	vsc: Ivsc;
}

export interface IOneVacancy {
	id?: number;
	jobTitle?: string;
	experience?: number;
	salary?: string;
	location?: string;
	requirements?: string[];
	workConditions?: string[];
}

export interface IFormInput {
	fullName: string;
	email: string;
	phoneNumber: string;
}

export interface IAddProfileProps {
	service: "GitHub" | "GitLab";
}

export interface ISmallCardProps {
	vacancy: IOneVacancy;
}

export interface IVacancyDescriptionProps {
	vacancy: IOneVacancy;
}
