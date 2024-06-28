import React from "react";

import { usernameFormatter } from "@/lib/utils";
import { UsernameTypes } from "@/types/User.type";

function UserName({ elementType, className, user }: UsernameTypes) {
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
