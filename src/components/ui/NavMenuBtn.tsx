import React from "react";

interface NavMenuBtnProps {
	isOpen: boolean;
}

const NavMenuBtn: React.FC<NavMenuBtnProps> = ({ isOpen }) => (
	<div className={`space-y-2 ${isOpen ? "mt-[10px] transform" : ""}`}>
		{isOpen ? (
			<div className="mr-1 mb-1">
				<span className="block w-8 h-0.5 bg-white rotate-45 transition-transform duration-300 ease-in-out ml-[-2px] mt-[2px] "></span>
				<span className="block w-8 h-0.5 bg-white -rotate-45  transition-transform duration-300 ease-in-out "></span>
			</div>
		) : (
			Array(3)
				.fill(null)
				.map((_, index) => (
					<span key={index} className="block w-8 h-0.5 bg-white"></span>
				))
		)}
	</div>
);

export default NavMenuBtn;
