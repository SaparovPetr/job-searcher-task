import { useNavigate } from "react-router-dom";
import styles from "./GoToBackButton.module.scss";
import { ReactNode } from "react";

export interface IGoToBackButton {
	content: string | ReactNode;
}

const GoToBackButton = ({ content }: IGoToBackButton) => {
	const navigate = useNavigate();
	const goToBack = () => {
		navigate(-1);
	};
	return (
		<button className={styles.backButton} onClick={goToBack}>
			{content}
		</button>
	);
};

export default GoToBackButton;
