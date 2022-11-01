import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class Char {
    constructor(name, nickname, description , photo, image,  ) {
        this.name = name;
        this.nickname = nickname;
        this.description  = description ;
        this.photo = photo;
        this.image = image;
        
     
    }

    getDate() {
        function randomDate(dateMin, dateMax) {
            function randomValueBetween(min, max) {
                return Math.random() * (max - min) + min;
            }

            dateMax = dateMax || new Date().toLocaleDateString();
            dateMin = new Date(dateMin).getTime();
            dateMax = new Date(dateMax).getTime();
            let options = {day: "numeric", month: "numeric", year: "numeric", hour: "numeric", minute: "numeric"}
            if (dateMin > dateMax) {
                return new Date(randomValueBetween(dateMax, dateMin)).toLocaleDateString(dateMax, options);
            } else {
                return new Date(randomValueBetween(dateMin, dateMax)).toLocaleDateString(dateMax, options);
            }
        }

        return randomDate("11/10/2022", "01/01/2020");
    }

    getLikes() {
        return (Math.floor(Math.random() * 100) + 1);
    }

    getSubscribers() {
        return (Math.floor(Math.random() * 1000) + 1);
    }
}

export default Char;