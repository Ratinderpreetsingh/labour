import { Labour } from "@/lib/types/labour.type";
import { baseApi } from "../apiSlice";

export const labourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET All Labours
    getLabours: builder.query<Labour[], void>({
      query: () => ({
        url: "/labour/get-all",
        method: "GET",
      }),
      providesTags: ["Labour"],
    }),

    // GET Labour by ID
    getLabourById: builder.query<Labour, number>({
      query: (id) => ({
        url: `/labour/get/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Labour", id }],
    }),

    // CREATE Labour
    createLabour: builder.mutation<Labour, Partial<Labour>>({
      query: (body) => ({
        url: "/labour/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Labour"],
    }),

    // UPDATE Labour
    updateLabour: builder.mutation<Labour, { id: number|string; data: Partial<Labour> }>({
      query: ({ id, data }) => ({
        url: `/labour/update/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Labour"],
    }),

    // DELETE Labour
    deleteLabour: builder.mutation<{  id: number|string ,success: boolean;}, number|string>({
      query: (id) => ({
        url: `/labour/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Labour"],
    }),
  }),
});

export const {
  useGetLaboursQuery,
  useGetLabourByIdQuery,
  useCreateLabourMutation,
  useUpdateLabourMutation,
  useDeleteLabourMutation,
} = labourApi;
