// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jan" },
// ];

import { Post, User } from "./models";
import { connectToDB } from "./utils";

// const posts = [
//   { id: 1, title: "Post 1", body: "....", userId: 1 },
//   { id: 2, title: "Post 2", body: "....", userId: 1 },
//   { id: 3, title: "Post 3", body: "....", userId: 2 },
//   { id: 4, title: "Post 4", body: "....", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDB();
    const post = await Post.find({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async (id) => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
