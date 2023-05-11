import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from "@heroicons/react/24/outline";

import { ReactElement, useEffect } from "react";

interface IButtonProps {
	currentStepIndex: number;
	steps: ReactElement[];
	isFirstStep: boolean;
	isLastStep: boolean;
	disabled: boolean;
	back: () => void;
	next: () => void;
}

const NavigatieFormular = ({
	currentStepIndex,
	steps,
	isFirstStep,
	isLastStep,
	back,
	next,
	disabled,
}: IButtonProps) => {
	const stilComunButon =
		"absolute flex  w-fit items-center justify-center border border-gri-brand gap-1 rounded-2xl px-2 py-2 text-gri-brand md:py-4 md:px-5";
	return (
		<div className="relative flex w-full items-center justify-between px-2 py-12  md:px-16">
			{!isFirstStep && (
				<button
					className={`${stilComunButon} left-0 hover:bg-gri-brand hover:text-alb-site`}
					onClick={back}
					type="button"
				>
					<ArrowSmallLeftIcon strokeWidth={2} className="h-3 w-3 md:h-5 md:w-5" />
					<span className="text-sm md:text-lg">Inapoi</span>
				</button>
			)}
			<div className="mx-auto text-sm md:text-xl">
				{currentStepIndex + 1} / {steps.length}
			</div>

			{!isLastStep ? (
				<button
					className={` right-0 ${stilComunButon}   ${
						disabled ? "cursor-not-allowed bg-gri-bg  opacity-20" : "bg-alb-site hover:bg-gri-brand hover:text-alb-site"
					}`}
					onClick={next}
					type="button"
					disabled={disabled}
				>
					<span className={` ${disabled ? "text-gri-bg" : " "}      text-sm md:text-lg`}>Continua</span>{" "}
					<ArrowSmallRightIcon
						strokeWidth={2}
						className={` ${disabled ? "text-gri-bg" : " "}  h-3 w-3 md:h-5 md:w-5 `}
					/>
				</button>
			) : (
				<button className={`${stilComunButon} right-0 `} type="submit">
					<span className="text-sm md:text-lg">Cauta</span>{" "}
					<ArrowSmallRightIcon strokeWidth={2} className="h-3 w-3 md:h-5 md:w-5" />
				</button>
			)}
		</div>
	);
};

export default NavigatieFormular;
