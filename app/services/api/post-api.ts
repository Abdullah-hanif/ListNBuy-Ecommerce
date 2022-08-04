import { API } from "./api"

const myPosts = () =>
  API.get("api/posts/my_posts").then(
    (res) => res,
    (err) => err,
  )

export const postService = {
  myPosts,
}
