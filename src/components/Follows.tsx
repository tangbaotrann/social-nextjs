import { followsFormatter } from "@/lib/utils";
import { UserPublicInfoTypes } from "@/types/User.type";

function Follows({
  elementType,
  followType,
  userPublic: user,
  textShow,
  className,
}: UserPublicInfoTypes) {
  const CompType = elementType;

  return (
    <CompType className={className}>
      {followType === "followers"
        ? followsFormatter(user._count.followers || 0, textShow)
        : followType === "followings"
        ? followsFormatter(user._count.followings || 0, textShow)
        : null}
    </CompType>
  );
}

export default Follows;
