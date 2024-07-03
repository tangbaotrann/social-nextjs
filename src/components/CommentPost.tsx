import { Suspense } from "react";

import Comments from "./Comments";
import Loading from "./Loading";

function CommentPost({ postId }: { postId: number }) {
  return (
    <div>
      {/* Load comments */}
      <Suspense fallback={<Loading />}>
        <Comments postId={postId} />
      </Suspense>
    </div>
  );
}

export default CommentPost;
