import { useParams } from "react-router-dom";
import styles from "./OneVacancyPage.module.scss";
import { useGetOneVacancyQuery } from "../../app/services/vacanciesApi";
import GoToBackButton from "../../shared/ui/GoToBackButton/GoToBackButton";
import VacancyDescription from "../../entities/VacancyDescription/VacancyDescription";
import { useEffect } from "react";

import { currentDate } from "../../shared/utils/getCurrentDate";
import JobForm from "../../features/Form/JobForm";
import {
	setCurrentDate,
	setId,
	setJobTitle,
} from "../../app/services/slices/formSlice";
import { useAppDispatch } from "../../app/services/store";

const OneVacancyPage = () => {
	const dispatch = useAppDispatch();

	const { id } = useParams();
	const { data, error, isLoading } = useGetOneVacancyQuery(id);

	useEffect(() => {
		if (data) {
			dispatch(setId(data[0].id));
			dispatch(setJobTitle(data[0].jobTitle));
			dispatch(setCurrentDate(currentDate));
		}
	}, [data]);

	if (isLoading) return <div className={styles.statusMessage}>Loading...</div>;
	if (error) return <div className={styles.statusMessage}>Error loading</div>;

	return (
		<section className={styles.container}>
			<div className={styles.titleZone}>
				<GoToBackButton
					content={
						<svg
							width="12"
							height="23"
							viewBox="0 0 12 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11 21.5L1 11.5L11 1.5"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					}
				/>
				<h1 className={styles.jobTitle}>{data[0].jobTitle}</h1>
			</div>
			<div className={styles.mainZone}>
				<VacancyDescription vacancy={data[0]} />
				<JobForm />
			</div>
		</section>
	);
};

export default OneVacancyPage;
