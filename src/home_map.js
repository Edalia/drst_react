import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export default function HomeMap() {
	// The location of Kasulu
	const position = { lat: -4.569861, lng: 30.104333 };

	//check if maps is loaded
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
	});

	//center maps around Kasulu location
	// const center = useMemo(() => position, []);

	return (
		<div className="container text-center mt-5 ">
			<h2>WHERE TO FIND US</h2>
			<div className="container d-flex justify-content-center mt-4">
				{!isLoaded ? (
					<h1>Loading...</h1>
				) : (
					<GoogleMap id="MapDiv" center={position} zoom={16}>
						<Marker position={position} />
					</GoogleMap>
				)}
			</div>
		</div>
	);
}
