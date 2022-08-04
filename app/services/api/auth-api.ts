import { API } from "./api"

const signin = (data) =>
  API.post("api/auth/login", data).then(
    (res) => res,
    (err) => err,
  )
const signup = (data) =>
  API.post("api/auth/register", data).then(
    (res) => res,
    (err) => err,
  )
const forgetpassword = (data) =>
  API.post("api/auth/password/update", data).then(
    (res) => res,
    (err) => err,
  )

const allPost = () =>
  API.get("api/posts").then(
    (res) => res,
    (err) => err,
  )
 
const allCategory = () =>
  API.get("api/categories").then(
    (res) => res,
    (err) => err,
  )
const allSubCategory = () =>
  API.get("api/categories?embed=children&parentId=1").then(
    (res) => res,
    (err) => err,
  )

const pkgsList = () =>
  API.get("api/packages?embed=currency&sort=lft").then(
    (res) => res,
    (err) => err,
  )

// not working bcoz of token apis
const getThreads = () =>
  API.get("api/threads?embed=post&filter=unread&perPage=20").then(
    (res) => res,
    (err) => err,
  )
// not working bcoz of token apis
const singleThread = () =>
  API.get("api/threads/:thread_id?embed=user,post,messages").then(
    (res) => res,
    (err) => err,
  )
// not working bcoz of token apis
const updateThread = () =>
  API.post("api/threads/update/:id").then(
    (res) => res,
    (err) => err,
  )
// not working bcoz of token apis
const updateStatusThread = () =>
  API.post("api/threads/bulkUpdate/:ids?type=markAsRead").then(
    (res) => res,
    (err) => err,
  )
// not working bcoz of token apis
const deleteThread = () =>
  API.delete("api/threads/:ids").then(
    (res) => res,
    (err) => err,
  )
// not working bcoz of token apis
const myAdverts = () =>
  API.get("api/posts/my_posts", {
  }).then(
    (res) => res,
    (err) => err,
  )

// not working bcoz of token apis
const addPosts = (data) =>
  API.post("api/posts", data).then(
    (res) => res,
    (err) => err,
  )

// not working bcoz of token apis
const saveInFav = () =>
  API.post("api/savedPosts").then(
    (res) => res,
    (err) => err,
  )
  
// not working bcoz of token apis
const getSaveList = () =>
  API.get("api/savedPosts").then(
    (res) => res,
    (err) => err,
  )

// not working bcoz of token apis
const delSaveList = (id:any) =>
  API.delete("api/savedPosts/"+id).then(
    (res) => res,
    (err) => err,
  )
  
const getPosts = () =>
  API.get("api/posts").then(
    (res) => res,
    (err) => err,
  )

const paymentMethod = () =>
  API.get("api/paymentMethods").then(
    (res) => res,
    (err) => err,
  )

const customInputFields = () =>
  API.post("api/posts/fields/:cat_id").then(
    (res) => res,
    (err) => err,
  )
const singleCateogry = () =>
  API.get("api/categories/:slugOrId").then(
    (res) => res,
    (err) => err,
  )

const byCateogry = () =>
  API.get("api/posts/find/73",).then(
    (res) => res,
    (err) => err,
  )

const settings = () =>
  API.get("api/settings").then(
    (res) => res,
    (err) => err,
  )
const allPosts = () =>
  API.get("api/posts/all").then(
    (res) => res,
    (err) => err,
  )

export const authService = {
  signin,
  signup,
  forgetpassword,
  allPost,
  allCategory,
  allSubCategory,
  pkgsList,
  getThreads,
  singleThread,
  updateThread,
  updateStatusThread,
  deleteThread,
  addPosts,
  getPosts,
  paymentMethod,
  customInputFields,
  singleCateogry,
  byCateogry,
  myAdverts,
  saveInFav,
  getSaveList,
  delSaveList,
  settings,
  allPosts,
}
