import { LoginResponse, User } from "@/lib/types/auth.types";
import { baseApi } from "../apiSlice";
import { setAccessToken } from "../baseQuery";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse,{ email: string; password: string }>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          setAccessToken(data.accessToken);
        } catch {
          setAccessToken(null);
        }
      },
    }),

    getProfile: builder.query<User, void>({
      query: () => "/auth/profile",
      providesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useGetProfileQuery } = authApi;
