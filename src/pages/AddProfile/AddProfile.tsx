import styles from "./AddProfile.module.scss";
import GoToBackButton from "../../shared/ui/GoToBackButton/GoToBackButton";

import { useState, ChangeEvent, useEffect } from "react";
import {
	setGitHubNick,
	setGitHubSubscribers,
	setGitLabNick,
	setGitLabSubscribers,
} from "../../app/services/slices/formSlice";
import { useAppDispatch } from "../../app/services/store";
import { IAddProfileProps } from "../../shared/utils/types";

const AddProfile: React.FC<IAddProfileProps> = ({ service }) => {
	const dispatch = useAppDispatch();
	const [nickname, setNickname] = useState<string>("");
	const [subscribers, setSubscribers] = useState<string>("");

	useEffect(() => {
		if (service === "GitHub") {
			dispatch(setGitHubNick(localStorage.getItem("gitHubNick")));
			dispatch(setGitHubSubscribers(localStorage.getItem("gitHubSubscribers")));

			setNickname(
				!localStorage.getItem("gitHubNick")
					? ""
					: String(localStorage.getItem("gitHubNick"))
			);
			setSubscribers(String(localStorage.getItem("gitHubSubscribers")));
		} else if (service === "GitLab") {
			dispatch(setGitLabNick(localStorage.getItem("gitLabNick")));
			dispatch(setGitLabSubscribers(localStorage.getItem("gitLabSubscribers")));

			setNickname(
				!localStorage.getItem("gitLabNick")
					? ""
					: String(localStorage.getItem("gitLabNick"))
			);
			setSubscribers(String(localStorage.getItem("gitLabSubscribers")));
		}
	}, []);

	const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setNickname(value);

		if (service === "GitHub") {
			dispatch(setGitHubNick(value));
			localStorage.setItem("gitHubNick", value);
		} else if (service === "GitLab") {
			dispatch(setGitLabNick(value));
			localStorage.setItem("gitLabNick", value);
		}
	};

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		if (service === "GitHub") {
			localStorage.setItem("gitHubSubscribers", e.target.value);
			setSubscribers(String(localStorage.getItem("gitHubSubscribers")));
			dispatch(
				setGitHubSubscribers(String(localStorage.getItem("gitHubSubscribers")))
			);
		} else if (service === "GitLab") {
			localStorage.setItem("gitLabSubscribers", e.target.value);
			dispatch(
				setGitLabSubscribers(String(localStorage.getItem("gitLabSubscribers")))
			);
			setSubscribers(String(localStorage.getItem("gitLabSubscribers")));
		}
	};

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
				<h1 className={styles.serviceTitle}>{`Добавить ${service}`}</h1>
			</div>
			<div className={styles.mainZone}>
				<label className={styles.label}>
					Никнейм
					<input
						className={styles.field}
						type="text"
						value={nickname}
						onChange={handleNicknameChange}
					/>
				</label>
				<label className={styles.label}>
					Количество репозиториев
					<select
						className={styles.select}
						aria-label="Количество репозиториев"
						onChange={handleSelectChange}
						value={subscribers}
					>
						<option value="">Не выбрано</option>
						<option value="1-5"> 1-5</option>
						<option value="5-10"> 5-10</option>
						<option value="10+"> 10+</option>
					</select>
				</label>
				<GoToBackButton content={"Продолжить"} />
			</div>
		</section>
	);
};

export default AddProfile;
