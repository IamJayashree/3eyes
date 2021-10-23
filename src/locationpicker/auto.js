import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

export default function PlacesAutocomplete() {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
        },
        debounce: 300,
    });

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect =
        ({ description }) =>
            () => {
                // When user selects a place, we can replace the keyword without request data from API
                // by setting the second parameter to "false"
                setValue(description, false);
                clearSuggestions();

                // Get latitude and longitude via utility functions
                getGeocode({ address: description })
                    .then((results) => getLatLng(results[0]))
                    .catch((error) => {
                        console.log("😱 Error: ", error);
                    });
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li key={place_id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });

    return (
        <>
            <input className="form-control" id="address"
                placeholder="Type your address" aria-label="Address" aria-describedby="Address"
                value={value}
                onChange={handleInput}
                disabled={!ready}
            />

            {/* We can use the "status" to decide whether we should display the dropdown or not */}
            {status === "OK" && <ul>{renderSuggestions()}</ul>}

        </>
    );
}
