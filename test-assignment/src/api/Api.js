import axios from "axios";

import { BASE_URL_DEV } from "./endpoints";
import {
  errorResponseHandler,
  successResponseHandler,
} from "../axios/interceptors";

export const contentType = {
  json: "application/json",
  multipart: "multipart/form-data",
};

export default class API {
  constructor(
    config = {
      headers: { contentType: contentType.json },
    }
  ) {
    const token = window.sessionStorage.getItem("token");

    this.config = {
      baseURL: BASE_URL_DEV,
      timeout: 40000,
    };

    this.instance = axios.create(this.config);
    this.instance.interceptors.response.use(
      successResponseHandler,
      errorResponseHandler
    );
  }

  get(url, id, params) {
    if (id) {
      url += `/${id}`;
    }
    return this.instance.get(url, { params });
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  postByUrl(url, params) {
    if (params) {
      return this.instance.post(url, null, { params });
    } else {
      return this.instance.post(url);
    }
  }

  delete(url, id) {
    return this.instance.delete(`${url}/${id}`);
  }

  deleteByToken(url) {
    return this.instance.delete(`${url}`);
  }

  put(url, body, id) {
    if (id) {
      url += `/${id}`;
    }
    return this.instance.put(url, body);
  }

  putByid(url, body) {
    return this.instance.put(url, body);
  }

  putById(url, body) {
    if (body) {
      return this.instance.put(url, body);
    } else {
      return this.instance.put(url);
    }
  }

  patch(url, body) {
    return this.instance.patch(url, body);
  }
}
