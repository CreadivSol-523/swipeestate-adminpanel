import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ApartmentType} from "./ApartmentType";

const Apartment = createApi({
	reducerPath: "Apartment",
	baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API}),
	endpoints: (builder) => ({
		GetApartments: builder.query<ApartmentType, {page: number}>({
			query: ({page}) => ({
				url: `/api/apartments/property-listing?page=${page}&limit=6`,
				method: "GET",
			}),
		}),
	}),
});

export const {useGetApartmentsQuery} = Apartment;

export default Apartment;
