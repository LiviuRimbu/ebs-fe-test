import React from "react";
import ContentLoader from "react-content-loader";

interface ProductLoaderProps {
	count: number;
}

const ProductLoader: React.FC<ProductLoaderProps> = ({ count }) => {
	const loaders = Array(count).fill(0); // Create an array of placeholders

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 w-[100vw] ">
			{loaders.map((_, index) => (
				<div key={index} className="w-full flex justify-center">
					<ContentLoader
						speed={2}
						width="100%" // Adjust width to match product card size
						height="60%" // Adjust height to match product card size
						viewBox="0 0 400 600" // Match width and height
						backgroundColor="#f3f3f3"
						foregroundColor="#1F2937"
					>
						<rect x="39" y="48" rx="17" ry="17" width="349" height="320"/>
						<rect x="469" y="477" rx="5" ry="5" width="36" height="31"/>
						<rect x="38" y="380" rx="6" ry="6" width="319" height="22"/>
						<rect x="41" y="415" rx="6" ry="6" width="42" height="32"/>
					</ContentLoader>
				</div>
			))}
		</div>
	);
};

export default ProductLoader;
