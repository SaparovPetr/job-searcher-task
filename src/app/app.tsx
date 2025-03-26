import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OneVacancyPage from "../pages/OneVacancyPage/OneVacancyPage";
import VacanciesList from "../pages/VacanciesList/VacanciesList";
import AddProfile from "../pages/AddProfile/AddProfile";

const App = () => {
	return (
		<Routes>
			<Route path="/one-vacancy-page/:id" element={<OneVacancyPage />} />
			<Route path="/" element={<VacanciesList />} />

			<Route path="*" element={<NotFoundPage />} />
			<Route path="/add-github" element={<AddProfile service={"GitHub"} />} />
			<Route path="/add-gitlab" element={<AddProfile service={"GitLab"} />} />
		</Routes>
	);
};

export default App;
