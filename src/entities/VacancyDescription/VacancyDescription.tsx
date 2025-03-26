import { ReactNode } from "react";
import styles from "./VacancyDescription.module.scss";
import { v4 as uuidv4 } from "uuid";
import { IVacancyDescriptionProps } from "../../shared/utils/types";

const VacancyDescription = ({ vacancy }: IVacancyDescriptionProps) => {
	return (
		<div className={styles.container}>
			<p
				className={styles.accentParagraph}
			>{`от ${Number(vacancy.salary).toLocaleString("ru-RU")} тг`}</p>
			<div className={styles.details}>
				<div className={styles.requirementsZone}>
					<h2>Общие требования:</h2>
					<ul className={styles.liItems}>
						{vacancy.requirements?.map((item: ReactNode) => (
							<li className={styles.liItem} key={uuidv4()}>
								{item}
							</li>
						))}
					</ul>
				</div>

				<div className={styles.conditionsZone}>
					<h2>Условия работы</h2>
					<ul className={styles.liItems}>
						{vacancy.workConditions?.map((item: ReactNode) => (
							<li className={styles.liItem} key={uuidv4()}>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default VacancyDescription;
