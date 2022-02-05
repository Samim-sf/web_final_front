import http from "./httpService";

import config from "./config.json";

export const addMovie = movie => {
    return http.post(`${config.localapi}/index.php/create`,
        JSON.stringify(movie)
    );
};
