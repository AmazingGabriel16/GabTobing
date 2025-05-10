"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create_card(img, title, description, time, video_link) {
    return "\n        <!-- Individual card layout slots -->\n        <div class=\"col\">\n        <div class=\"card\" style=\"width: 20rem\">\n            <h5 class=\"card-title text-center pt-3 pb-2\"> ".concat(Date, " </h5>\n            <img class=\"container-fluid\" src=\"").concat(img, "\">\n            <div class=\"p-3\">\n               <h3 class=\"class-title\">").concat(title, "</h3>\n               <p class=\"card-text\">").concat(description, "</p>\n               <div class=\"container-fluid text-center\">\n                   <a href=\"").concat(video_link, "\" class=\"container-fluid btn btn-primary\">View stream!</a>\n               </div>\n            </div>\n        </div>\n        </div>\n    ");
}
// Defining interface for the JSON structure
// Declare variables
var img = "test";
var title = "test2";
var description = "test3";
var time = "test4";
var video_link = "test5";
// Obtain the img
console.log(create_card(img, title, description, time, video_link));
