import {ShowErrorToast} from "@/components/Toast/Toast";
import {useGetApartmentsQuery} from "@/redux/Apartment/ApartmentSlice";

export const useGetApartmentHandler = ({page}: {page: number}) => {
	const apartment = useGetApartmentsQuery({page});

	const ApartmentData = apartment?.data;
	const ApartmentLoading = apartment.isLoading;
	const {isError, error, refetch} = apartment;

	if (isError) {
		ShowErrorToast("Failed to fetch Apartments Details");
	}

	return {
		ApartmentData,
		ApartmentLoading,
		isError,
		error,
		refetch,
	};
};
