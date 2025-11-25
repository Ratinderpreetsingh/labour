import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "https://labour-backend-uwk7.onrender.com",
  credentials: "include",
  prepareHeaders: (headers) => {
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    console.log("Access token expired → refreshing...");

    if ((args as FetchArgs).url === "/auth/refresh") {
      accessToken = null;
      return result;
    }

    const refreshResult = await rawBaseQuery(
      { url: "/auth/refresh", method: "POST" },
      api,
      extraOptions
    );

    if (
      refreshResult.data &&
      typeof refreshResult.data === "object" &&
      "accessToken" in refreshResult.data
    ) {
      const newToken = (refreshResult.data as { accessToken: string })
        .accessToken;

      setAccessToken(newToken);

      result = await rawBaseQuery(args, api, extraOptions);
    } else {
      accessToken = null;
    }
  }

  return result;
};
