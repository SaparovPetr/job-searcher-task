import { useGetAllVacanciesQuery } from "../../app/services/vacanciesApi";
import styles from "./VacanciesList.module.scss";
import SmallCard from "../../widgets/SmallCard/SmallCard";
import { IOneVacancy } from "../../shared/utils/types";

const VacanciesList = ({}) => {
	const { data, error, isLoading } = useGetAllVacanciesQuery("");

	if (isLoading) return <div className={styles.statusMessage}>Loading...</div>;
	if (error) return <div className={styles.statusMessage}>Error loading</div>;

	return (
		<>
			<h1 className={styles.title}>Наши вакансии</h1>

			<ul className={styles.container}>
				{data?.map((vacancy: IOneVacancy) => (
					<SmallCard key={vacancy.id} vacancy={vacancy} />
				))}
			</ul>
		</>
	);
};

export default VacanciesList;
