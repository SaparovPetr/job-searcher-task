import { createSlice } from "@reduxjs/toolkit";
import { IFormState } from "../../../shared/utils/types";

export const initialStateForm: IFormState = {
	id: "",
	jobTitle: "",
	fullName: "",
	email: "",
	phoneNumber: "",
	currentDate: "",
	vsc: {
		gitHub: {
			nickname: "",
			subscribers: "",
		},
		gitLab: {
			nickname: "",
			subscribers: "",
		},
	},
};

export const formSlice = createSlice({
	name: "formSlice",
	initialState: initialStateForm,
	reducers: {
		setId(state, action) {
			state.id = action.payload;
		},
		setJobTitle(state, action) {
			state.jobTitle = action.payload;
		},
		setFullName(state, action) {
			state.fullName = action.payload;
		},
		setEmail(state, action) {
			state.email = action.payload;
		},
		setPhoneNumber(state, action) {
			state.phoneNumber = action.payload;
		},
		setCurrentDate(state, action) {
			state.currentDate = action.payload;
		},
		setGitHubNick(state, action) {
			state.vsc.gitHub.nickname = action.payload;
		},
		setGitHubSubscribers(state, action) {
			state.vsc.gitHub.subscribers = action.payload;
		},
		setGitLabNick(state, action) {
			state.vsc.gitLab.nickname = action.payload;
		},
		setGitLabSubscribers(state, action) {
			state.vsc.gitLab.subscribers = action.payload;
		},
		resetStore(state) {
			state = {
				id: "",
				jobTitle: "",
				fullName: "",
				email: "",
				phoneNumber: "",
				currentDate: "",
				vsc: {
					gitHub: {
						nickname: "",
						subscribers: "",
					},
					gitLab: {
						nickname: "",
						subscribers: "",
					},
				},
			};
		},
	},
	selectors: {
		selectAllState: (sliceState) => sliceState,
	},
});

export const { selectAllState } = formSlice.selectors;

export const {
	setId,
	setJobTitle,
	setFullName,
	setEmail,
	setPhoneNumber,
	setCurrentDate,
	setGitHubNick,
	setGitHubSubscribers,
	setGitLabNick,
	setGitLabSubscribers,
	resetStore,
} = formSlice.actions;
