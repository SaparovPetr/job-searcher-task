import styles from "./style.module.scss";
import GoToBackButton from "../../shared/ui/GoToBackButton/GoToBackButton";

const NotFoundPage = () => {
	return (
		<div className={styles.page_not_found}>
			<h1>😒</h1>
			<p>Такой страницы не существует</p>
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
		</div>
	);
};

export default NotFoundPage;
