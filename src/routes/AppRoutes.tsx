import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound.tsx"
import CategoryPage from "../components/Categories.tsx"


const AppRoutes: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path=":categoryId" element={<CategoryPage />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRoutes;
