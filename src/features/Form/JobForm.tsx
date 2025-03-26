import { Link } from "react-router-dom";
import styles from "./JobForm.module.scss";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/services/store";
import {
	resetStore,
	selectAllState,
	setEmail,
	setFullName,
	setPhoneNumber,
} from "../../app/services/slices/formSlice";
import { IFormInput } from "../../shared/utils/types";

const JobForm = () => {
	const {
		register,
		formState: { errors, isValid },
		watch,
		handleSubmit,
		reset,
		setValue,
	} = useForm<IFormInput>({
		mode: "onChange",
		defaultValues: {
			fullName: localStorage.getItem("fullName") || "",
			email: localStorage.getItem("email") || "",
			phoneNumber: localStorage.getItem("phoneNumber") || "",
		},
	});

	const dispatch = useAppDispatch();
	const state = useAppSelector(selectAllState);

	useEffect(() => {
		dispatch(setFullName(localStorage.getItem("fullName")));
		dispatch(setEmail(localStorage.getItem("email")));
		dispatch(setPhoneNumber(localStorage.getItem("phoneNumber")));
	}, [setValue, dispatch]);

	useEffect(() => {
		const subscription = watch((value) => {
			localStorage.setItem("fullName", String(value.fullName));
			localStorage.setItem("email", String(value.email));
			localStorage.setItem("phoneNumber", String(value.phoneNumber));

			dispatch(setFullName(localStorage.getItem("fullName")));
			dispatch(setEmail(localStorage.getItem("email")));
			dispatch(setPhoneNumber(localStorage.getItem("phoneNumber")));
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	const onSubmit = () => {
		console.log(state);
		localStorage.removeItem("fullName");
		localStorage.removeItem("email");
		localStorage.removeItem("phoneNumber");
		dispatch(resetStore());
		reset({
			fullName: "",
			email: "",
			phoneNumber: "",
		});
	};

	return (
		<div className={styles.formContainer}>
			<h2 className={styles.title}>Откликнуться на вакансию</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<label className={styles.lable} htmlFor="fullName">
					ФИО
				</label>

				<input
					placeholder="ФИО"
					id="fullName"
					{...register("fullName", {
						required: "Поле обязательно",
						minLength: {
							value: 5,
							message: "Минимум 5 символов",
						},
					})}
				/>

				{errors?.fullName && (
					<div className={styles.errorMessage}>
						{errors?.fullName?.message || `Error!`}
					</div>
				)}

				<label className={styles.lable} htmlFor="email">
					Email
				</label>
				<input
					id="email"
					placeholder="Email"
					{...register("email", {
						required: "Поле обязательно",
						minLength: {
							value: 5,
							message: "Минимум 5 символов",
						},
						pattern: {
							value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
							message: "Некорректный формат email",
						},
					})}
				/>
				{errors?.email && (
					<div className={styles.errorMessage}>
						{errors?.email?.message || `Error!`}
					</div>
				)}

				<label className={styles.lable} htmlFor="phoneNumber">
					Телефон
				</label>

				<input
					id="phoneNumber"
					placeholder="Телефон"
					{...register("phoneNumber", {
						required: "Поле обязательно",
						minLength: {
							value: 5,
							message: "Минимум 5 символов",
						},
						pattern: {
							value: /^\+?[1-9]\d{1,14}$/,
							message: "Некорректный номер телефона",
						},
					})}
				/>
				{errors?.phoneNumber && (
					<div className={styles.errorMessage}>
						{errors?.phoneNumber?.message || `Error!`}
					</div>
				)}

				<Link to={`/add-github`}>
					<button className={styles.reposButton}>
						<span>Добавить GitHub</span>
						<svg
							width="12"
							height="22"
							viewBox="0 0 12 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 1L11 11L1 21"
								stroke="black"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</Link>

				<Link to={`/add-gitlab`}>
					<button className={styles.reposButton}>
						<span>Добавить GitLab</span>
						<svg
							width="12"
							height="22"
							viewBox="0 0 12 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 1L11 11L1 21"
								stroke="black"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</Link>

				<button disabled={!isValid} className={styles.submitButton}>
					<span>Отправить</span>
				</button>
			</form>
		</div>
	);
};

export default JobForm;
