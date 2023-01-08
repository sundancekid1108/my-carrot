import type { NextPage } from "next";
import Layout from "@components/layout";
import Input from "@components/input";
import Button from "@components/button";
import useUserInfo from "@libs/client/useUserInfo";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useMutation from "@libs/client/useMutation";

interface EditProfileForm {
	email?: string;
	name?: string;
	phonenumber?: string;
	formErrors?: string;
}

interface EditProfileResponse {
	isSuccess: boolean;
	error?: string;
}

const EditProfile: NextPage = () => {
	const { user } = useUserInfo();
	console.log("userinfo", user);
	const {
		register,
		setValue,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<EditProfileForm>();

	const [editProfile, { data, loading }] =
		useMutation<EditProfileResponse>(`/api/users/me`);

	const onValid = ({ email, name, phonenumber }: EditProfileForm) => {
		if (loading) return;

		if (email === "" && phonenumber === "" && name === "") {
			return setError("formErrors", {
				message: "Email OR Phone number are required. You need to choose one.",
			});
		}
		editProfile({
			email,
			phonenumber,
			name,
		});

		console.log("onValid", email, phonenumber);
	};

	useEffect(() => {
		if (user?.email) setValue("email", user.email);
		if (user?.phonenumber) setValue("phonenumber", user.phonenumber);
		if (user?.name) setValue("name", user.name);
	}, [user, setValue]);

	useEffect(() => {
		if (data && !data.isSuccess && data.error) {
			setError("formErrors", { message: data.error });
		}
	}, [data, setError]);

	return (
		<>
			<Layout canGoBack title="Edit Profile">
				<form onSubmit={handleSubmit(onValid)} className="py-10 px-5 space-y-4">
					<div className="flex items-center space-x-3">
						<div className="w-14 h-14 rounded-full bg-slate-500" />
						<label
							htmlFor="picture"
							className="cursor-pointer py-2 px-3 border hover:bg-gray-50 border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700">
							Change
							<input
								id="picture"
								type="file"
								className="hidden"
								accept="image/*"
							/>
						</label>
					</div>
					<Input
						register={register("name")}
						required={false}
						label="Name"
						name="name"
						type="text"
					/>

					<Input
						register={register("email")}
						required={false}
						label="Email address"
						name="email"
						type="email"
					/>
					<Input
						register={register("phonenumber")}
						required={false}
						label="Phone number"
						name="phonenumber"
						type="string"
						kind="phonenumber"
					/>
					{errors.formErrors ? (
						<span className="my-2 text-red-500 font-medium text-center block">
							{errors.formErrors.message}
						</span>
					) : null}
					<Button text={loading ? "Loading..." : "Update profile"} />
				</form>
			</Layout>
		</>
	);
};

export default EditProfile;
