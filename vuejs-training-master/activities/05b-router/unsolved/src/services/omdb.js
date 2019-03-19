import axios from 'axios';

const url = 'http://www.omdbapi.com/';

export function search(movieName, year, apikey) {
    return axios.get(url, {
        params: {
            s: movieName,
            y: year,
            apikey: apikey
        }
    }).then(
        function (result) {
            if ("Search" in result.data)
                return result.data.Search;
            else
                return [];
        }
    );
}

export function getDetails(movieId, apikey) {
    return axios.get(url, {
        params: {
            i: movieId,
            apikey: apikey
        }
    }).then(
        function (result) {
            return result.data;
        }
    );
}
