import React from "react";

import { usernameFormatter } from "@/lib/utils";
import { UserPublicInfoTypes } from "@/types/User.type";

function UserName({
  elementType,
  className,
  userPublic: user,
}: UserPublicInfoTypes) {
  const CompType = elementType;

  return (
    <CompType className={className}>
      {user.name && user.surname
        ? usernameFormatter(user.surname, user.name)
        : user.username}
    </CompType>
  );
}

export default UserName;
