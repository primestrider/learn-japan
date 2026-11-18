import { useQuery } from "@tanstack/react-query"

import { fetchCommentsByPostId } from "../../services/api"

/**
 * Example post ID used to demonstrate comments fetching.
 */
const EXAMPLE_POST_ID = 1

export default function CommentsComponent() {
  /**
   * Query to fetch comments for a specific post.
   *
   * @see https://jsonplaceholder.typicode.com/posts/{id}/comments
   */
  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["jsonplaceholder", "post", EXAMPLE_POST_ID, "comments"],
    queryFn: () => fetchCommentsByPostId(EXAMPLE_POST_ID),
  })

  return (
    <div className="space-y-3 rounded-xl border border-neutral-700 bg-neutral-800 p-4">
      <h3 className="text-lg font-semibold">Comments for Post #{EXAMPLE_POST_ID}</h3>

      <p className="text-xs text-neutral-400">
        Status:{" "}
        {isLoading
          ? "loading..."
          : isError
            ? "error loading comments"
            : `loaded ${comments?.length ?? 0} comments`}
      </p>

      {comments && !isError && (
        <ul className="max-h-40 space-y-1 overflow-auto text-xs">
          {comments.map((comment) => (
            <li key={comment.id}>
              <p className="font-semibold">{comment.email}</p>
              <p className="text-neutral-300">{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
