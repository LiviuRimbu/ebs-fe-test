import React from "react";
import { Button } from "@/components/ui/button.tsx";

interface ImageBtnProps {
	src: string;
	alt: string;
	className?: string;
	onClick?: () => void;
}

const ImageBtn: React.FC<ImageBtnProps> = ({ src, alt, className, onClick }) => {
	return (
		<Button
			variant="image"
			className={`bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl ${className}`}
			onClick={onClick}
		>
			<img src={src} alt={alt} className="w-6 h-6" />
		</Button>
	);
};

export default ImageBtn;
