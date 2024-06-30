"use client";

import Image from "next/image";
import { useOptimistic, useState } from "react";

import { icons } from "../../public";
import {
  FriendRequestIdType,
  FriendRequestTypes,
  FriendRequestTypesProps,
} from "@/types/FriendRequest.type";
import UserName from "./UserName";
import { acceptFollowRequest } from "@/lib/actions/acceptFollowRequest.action";
import { declineFollowRequest } from "@/lib/actions/declineFollowRequest.action";

function FriendRequestListAction({ requests }: FriendRequestTypesProps) {
  const [requestState, setRequestState] =
    useState<FriendRequestTypes[]>(requests);

  // handle accept follow request
  const handleAcceptFollowReq = async (
    requestId: number,
    userId: string
  ): Promise<void> => {
    removeOptimisticRequest({ requestId: requestId }) as void;

    try {
      await acceptFollowRequest(userId);

      setRequestState((prevState) =>
        prevState.filter((req) => req.id !== requestId)
      );
    } catch (err) {
      console.log(err);
    }
  };

  // handle decline follow request
  const handleDeclineFollowReq = async (
    requestId: number,
    userId: string
  ): Promise<void> => {
    removeOptimisticRequest({ requestId: requestId }) as void;

    try {
      await declineFollowRequest(userId);

      setRequestState((prevState) =>
        prevState.filter((req) => req.id !== requestId)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const [optimisticRequest, removeOptimisticRequest] = useOptimistic<
    FriendRequestTypes[],
    FriendRequestIdType
  >(requestState, (state, { requestId }) =>
    state.filter((req) => req.id !== requestId)
  );

  return (
    <>
      {optimisticRequest.length > 0 ? (
        <>
          {optimisticRequest.map((req: FriendRequestTypes) => (
            <div className="flex items-center justify-between" key={req.id}>
              <div className="flex items-center gap-4">
                <Image
                  src={req.sender.avatar || icons.login}
                  alt={req.sender.avatar || ""}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <UserName elementType="span" userPublic={req.sender} />
              </div>

              <div className="flex items-center gap-2">
                <form
                  action={() => handleAcceptFollowReq(req.id, req.sender.id)}
                >
                  <button>
                    <Image
                      src={icons.accept}
                      alt=""
                      width={20}
                      height={20}
                      className="cursor-pointer hover:opacity-70 hover:duration-500"
                    />
                  </button>
                </form>

                <form
                  action={() => handleDeclineFollowReq(req.id, req.sender.id)}
                >
                  <button>
                    <Image
                      src={icons.reject}
                      alt=""
                      width={20}
                      height={20}
                      className="cursor-pointer hover:opacity-70 hover:duration-500"
                    />
                  </button>
                </form>
              </div>
            </div>
          ))}
        </>
      ) : (
        <span>Not found friend request.</span>
      )}
    </>
  );
}

export default FriendRequestListAction;
