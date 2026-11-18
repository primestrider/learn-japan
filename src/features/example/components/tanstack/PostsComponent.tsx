import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import type { JsonPlaceholderPost } from "../../models/api.model"
import {
  createPost as createPostApi,
  fetchCommentsByPostId,
  fetchPostById,
  fetchPosts,
} from "../../services/api"

/**
 * Example post ID used to demonstrate detail and comments fetching.
 */
const EXAMPLE_POST_ID = 1

const postsQueryKey = ["jsonplaceholder", "posts"] as const

const statusText = (isLoading: boolean, isError: boolean, loadedText: string) =>
  isLoading ? "loading..." : isError ? "error" : loadedText

export default function PostsComponent() {
  /**
   * TanStack Query client instance.
   * Used for cache updates and manual invalidations.
   */
  const queryClient = useQueryClient()

  /**
   * Posts list query.
   *
   * @see https://jsonplaceholder.typicode.com/posts
   */
  const posts = useQuery({
    queryKey: postsQueryKey,
    queryFn: fetchPosts,
  })

  /**
   * Single post detail query.
   *
   * @see https://jsonplaceholder.typicode.com/posts/{id}
   */
  const postDetail = useQuery({
    queryKey: ["jsonplaceholder", "post", EXAMPLE_POST_ID],
    queryFn: () => fetchPostById(EXAMPLE_POST_ID),
  })

  /**
   * Comments for a specific post query (shares cache with CommentsComponent).
   *
   * @see https://jsonplaceholder.typicode.com/posts/{id}/comments
   */
  const comments = useQuery({
    queryKey: ["jsonplaceholder", "post", EXAMPLE_POST_ID, "comments"],
    queryFn: () => fetchCommentsByPostId(EXAMPLE_POST_ID),
  })

  /**
   * Mutation to create a new post.
   *
   * JSONPlaceholder does not persist the created resource, so on success
   * the new post is prepended to the cached posts list.
   */
  const createPost = useMutation({
    mutationKey: ["jsonplaceholder", "posts", "create"],
    mutationFn: (payload: Omit<JsonPlaceholderPost, "id">) => createPostApi(payload),
    onSuccess: (newPost) => {
      queryClient.setQueryData<JsonPlaceholderPost[]>(postsQueryKey, (old) =>
        old ? [newPost, ...old] : [newPost],
      )
    },
  })

  const handleCreatePost = () => {
    createPost.mutate({
      userId: 1,
      title: "Sample Post from React Query",
      body: "This is a fake post created only for demo purposes.",
    })
  }

  return (
    <div className="space-y-4">
      {/* POSTS + CREATE POST */}
      <div className="space-y-3 rounded-xl border border-neutral-700 bg-neutral-800 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">Posts</h3>

          <button
            type="button"
            className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-500 disabled:opacity-60"
            disabled={createPost.isPending}
            onClick={handleCreatePost}
          >
            {createPost.isPending ? "Creating..." : "Create Sample Post"}
          </button>
        </div>

        <p className="text-xs text-neutral-400">
          Status:{" "}
          {statusText(posts.isLoading, posts.isError, `loaded ${posts.data?.length ?? 0} posts`)}
        </p>

        {posts.data && !posts.isError && (
          <ul className="max-h-40 space-y-1 overflow-auto text-sm">
            {posts.data.map((post) => (
              <li key={post.id} className="truncate">
                <span className="text-xs text-neutral-500">#{post.id}</span>
                <span className="ml-2 font-medium">{post.title}</span>
              </li>
            ))}
          </ul>
        )}

        {createPost.isSuccess && (
          <div className="mt-2 rounded-md border border-emerald-600 bg-emerald-900/40 p-2 text-xs">
            <p className="font-semibold">Last created post (fake):</p>
            <p className="mt-1">
              <span className="font-medium">{createPost.data.title}</span> — {createPost.data.body}
            </p>
          </div>
        )}
      </div>

      {/* DETAIL + COMMENTS */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* SINGLE POST */}
        <div className="space-y-2 rounded-xl border border-neutral-700 bg-neutral-800 p-4">
          <h3 className="font-semibold">Single Post (ID = {EXAMPLE_POST_ID})</h3>
          <p className="text-xs text-neutral-400">
            Status: {statusText(postDetail.isLoading, postDetail.isError, "success")}
          </p>

          {postDetail.data && !postDetail.isError && (
            <div className="space-y-1 text-sm">
              <p className="font-semibold">{postDetail.data.title}</p>
              <p className="text-neutral-300">{postDetail.data.body}</p>
            </div>
          )}
        </div>

        {/* COMMENTS */}
        <div className="space-y-2 rounded-xl border border-neutral-700 bg-neutral-800 p-4">
          <h3 className="font-semibold">Comments for Post #{EXAMPLE_POST_ID}</h3>
          <p className="text-xs text-neutral-400">
            Status:{" "}
            {statusText(
              comments.isLoading,
              comments.isError,
              `loaded ${comments.data?.length ?? 0} comments`,
            )}
          </p>

          {comments.data && !comments.isError && (
            <ul className="max-h-32 space-y-1 overflow-auto text-xs">
              {comments.data.map((comment) => (
                <li key={comment.id}>
                  <span className="font-semibold">{comment.email}</span>:{" "}
                  <span className="text-neutral-300">{comment.body}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
