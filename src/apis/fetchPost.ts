import axios from "axios";
import { FETCH_POST } from "../constants/url";
import { Coffee } from "../reducers/topReducer";

export default async function fetchPost(): Promise<Coffee[]> {
  const response = await axios.get(FETCH_POST);
  return response.data;
}
