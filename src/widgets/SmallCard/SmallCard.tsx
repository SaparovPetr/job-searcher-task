import { Link } from "react-router-dom";
import styles from "./SmallCard.module.scss";
import { ISmallCardProps } from "../../shared/utils/types";

const SmallCard = ({ vacancy }: ISmallCardProps) => {
	return (
		<li className={styles.smallCardContainer}>
			<div className={styles.paragraphs}>
				<p className={styles.paleParagraph}>{vacancy.location}</p>
				<p>{vacancy.jobTitle}</p>
				<p
					className={styles.paleParagraph}
				>{`от ${Number(vacancy.salary).toLocaleString("ru-RU")} тг`}</p>
			</div>
			<Link to={`/one-vacancy-page/${vacancy.id}`}>
				<button>
					<span className={styles.buttonSpan}>
						Подробнее{" "}
						<svg
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4.41669 12.5L20.9167 12.5"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M14.1667 5.75L20.9167 12.5L14.1667 19.25"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
				</button>
			</Link>
		</li>
	);
};

export default SmallCard;
