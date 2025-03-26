import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vacanciesApi = createApi({
	reducerPath: "vacanciesApi",
	tagTypes: ["Vacancies"],
	baseQuery: fetchBaseQuery({
		baseUrl: "https://670558dd031fd46a830f9fda.mockapi.io/",
	}),
	endpoints: (builder) => ({
		getAllVacancies: builder.query({
			query: () => "/vacancies",
		}),
		getOneVacancy: builder.query({
			query: (id) => `/vacancies?id=${id}`,
		}),
	}),
	keepUnusedDataFor: 3000,
});

export const { useGetAllVacanciesQuery, useGetOneVacancyQuery } = vacanciesApi;
