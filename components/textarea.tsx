import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
	label?: string;
	name?: string;
	register: UseFormRegisterReturn;
	[key: string]: any;
}
const TextArea = ({ label, name, register, ...rest }: TextAreaProps) => {
	return (
		<>
			<div>
				<textarea
					id={name}
					{...register}
					className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
					rows={5}
					{...rest}
				/>
			</div>
		</>
	);
};

export default TextArea;
