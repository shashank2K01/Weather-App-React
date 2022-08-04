import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Geo_api_url } from "../../api";
import { Geoapi } from "../../api";

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);


    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)
    }

    const loadOptions = (inputValue) => {
        
        
        return fetch(`${Geo_api_url}/cities?minPopulation=100000&namePrefix=${inputValue}`, Geoapi)
            .then(response => response.json())
            .then((response) => {
                // console.log(response)
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`
                            
                        };

                    }),
                };

            });

    };

    return (

        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={700}
            value = {search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />


    );
}

export default Search;