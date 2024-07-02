"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

import { icons } from "../../public";
import ButtonSubmitForm from "./ButtonSubmitForm";
import Modal from "./Modal";
import { UserProfileProps } from "@/types/User.type";
import { updateProfile } from "@/lib/actions/updateProfile.action";

function UpdateInfoUserAction({ user }: UserProfileProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [cover, setCover] = useState<any>();

  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    error: false,
  });

  const router = useRouter();

  const handleModal = () => {
    setOpenModal(!openModal);

    state.success && router.refresh();
  };

  const handleUpdateProfile = (formData: FormData, coverSecureUrl: string) => {
    formAction({ formData, coverSecureUrl });
  };

  return (
    <div className="">
      <span
        className="text-blue-500 text-xs cursor-pointer hover:opacity-70 hover:duration-500"
        onClick={handleModal}
      >
        Update
      </span>

      {openModal && (
        <Modal>
          <form
            action={(formData: FormData) =>
              handleUpdateProfile(formData, cover?.secure_url)
            }
            className="relative p-8 bg-white rounded-lg flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3"
          >
            <h1>Update profile</h1>
            <div className="mt-4 text-xs text-gray-500">
              Use the navbar to change the avatar or username.
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="">Cover picture: </label>
              <CldUploadWidget
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                onSuccess={(result: CloudinaryUploadWidgetResults) =>
                  setCover(result.info)
                }
              >
                {({ open }) => {
                  return (
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => open()}
                    >
                      <Image
                        src={user.cover || icons.noCover}
                        alt={user.cover || icons.noCover}
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-gray-600">
                        Change
                      </span>
                    </div>
                  );
                }}
              </CldUploadWidget>

              <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="name">First name: </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={user.name || "First name..."}
                    className="w-full outline-none border-none rounded-md p-1 text-xs focus:ring-2"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="surname">Surname: </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder={user.surname || "Surname..."}
                    className="w-full outline-none border-none rounded-md p-1 text-xs focus:ring-2"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="description">Description: </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder={user.description || "Description..."}
                    className="w-full outline-none border-none rounded-md p-1 text-xs focus:ring-2"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="city">City: </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder={user.city || "City..."}
                    className="w-full outline-none border-none rounded-md p-1 text-xs focus:ring-2"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="school">School: </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    placeholder={user.school || "School..."}
                    className="w-full outline-none border-none rounded-md p-1 text-xs focus:ring-2"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="work">Work: </label>
                  <input
                    type="text"
                    id="work"
                    name="work"
                    placeholder={user.work || "Work..."}
                    className="w-full outline-none border-none rounded-md p-1 text-xs focus:ring-2"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="Website">Website: </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    placeholder={user.website || "Website..."}
                    className="w-full outline-none border-none rounded-md p-1 text-xs focus:ring-2"
                  />
                </div>
              </div>

              <ButtonSubmitForm>Update</ButtonSubmitForm>

              {/* show status form action */}
              {state.success && (
                <span className="text-green-500 text-center">
                  Profile has been updated.
                </span>
              )}
              {state.error && (
                <span className="text-red-500 text-center">
                  Something went wrong!
                </span>
              )}
            </div>

            {/* icon close modal */}
            <div
              className="absolute text-lg right-2 top-1 cursor-pointer hover:opacity-70 hover:duration-500"
              onClick={handleModal}
            >
              X
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default UpdateInfoUserAction;
