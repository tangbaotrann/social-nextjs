"use client";

import { useOptimistic, useState } from "react";

import ButtonSubmitForm from "./ButtonSubmitForm";
import { switchFollow } from "@/lib/actions/switchFollow.action";
import { switchBlock } from "@/lib/actions/switchBlock.action";
import {
  FollowsAndBlockTypes,
  UserStateActionTypes,
  UserStateTypes,
} from "@/types/User.type";

function FollowsAndBlockAction({
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: FollowsAndBlockTypes) {
  const [userState, setUserState] = useState<UserStateTypes>({
    following: isFollowing,
    blocked: isUserBlocked,
    followingReqSent: isFollowingSent,
  });

  // handle Follow user
  const handleSwitchFollow = async (): Promise<void> => {
    switchOptimisticState({ actions: "Follow" }) as void;

    try {
      if (userId) {
        await switchFollow(userId);

        setUserState((prevState) => ({
          ...prevState,
          following: prevState.following && false,
          followingReqSent:
            !prevState.following && !prevState.followingReqSent ? true : false,
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // handle Block user
  const handleSwitchBlock = async (): Promise<void> => {
    switchOptimisticState({ actions: "Block" }) as void;

    try {
      if (userId) {
        await switchBlock(userId);

        setUserState((prevState) => ({
          ...prevState,
          blocked: !prevState.blocked,
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [optimisticState, switchOptimisticState] = useOptimistic<
    UserStateTypes,
    UserStateActionTypes
  >(userState, (state, { actions: actionType }) =>
    actionType === "Follow"
      ? {
          ...state,
          following: state.following && false,
          followingReqSent:
            !state.following && !state.followingReqSent ? true : false,
        }
      : {
          ...state,
          blocked: !state.blocked,
        }
  );

  return (
    <>
      <form action={handleSwitchFollow}>
        <ButtonSubmitForm className="w-full bg-blue-500 text-white rounded-md p-2 hover:opacity-80 hover:duration-500">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingReqSent
            ? "Friend Request Sent"
            : "Follow"}
        </ButtonSubmitForm>
      </form>

      <form action={handleSwitchBlock} className="self-end">
        <ButtonSubmitForm>
          <span className="text-red-500 text-xs self-end cursor-pointer hover:opacity-70 hover:duration-500">
            {optimisticState.blocked ? "Unblock User" : "Block user"}
          </span>
        </ButtonSubmitForm>
      </form>
    </>
  );
}

export default FollowsAndBlockAction;
