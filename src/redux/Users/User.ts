import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const Users = createApi({
	reducerPath: "Users",
	baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API}),
	endpoints: (builder) => ({
		GetBuyers: builder.query<any, undefined>({
			query: () => ({
				url: `/api/get-buyers`,
				method: "GET",
			}),
		}),
		GetSellers: builder.query<any, undefined>({
			query: () => ({
				url: `/api/get-sellers`,
				method: "GET",
			}),
		}),
	}),
});

export const {useGetBuyersQuery, useGetSellersQuery} = Users;

export default Users;
