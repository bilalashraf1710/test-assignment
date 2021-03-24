import axios from "axios";
import { ContentType } from "../../enums/enums";
import {
  requestHandler,
  successResponseHandler,
  errorResponseHandler,
} from "./interceptors";

import { MOCKURL } from "../constants";
export const getAxiosInstance = (
  config = {
    headers: { contentType: ContentType.json },
  }
) => {
  const instance = axios.create({
    baseURL: MOCKURL,
    headers: {
      "Content-Type": config.headers.contentType || ContentType.json,
    },
  });

  instance.interceptors.request.use(requestHandler);
  instance.interceptors.response.use(
    successResponseHandler,
    errorResponseHandler
  );

  return instance;
};

export default getAxiosInstance();
