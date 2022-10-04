import axios from "axios";
import { CREATE_POST } from "../constants/url";

export default async function createPost(title: string, body: string) {
  const data = {
    title,
    body,
  };
  const response = await axios.post(CREATE_POST, data);
  return response;
}
