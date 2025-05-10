import schedule from '../datasets/upcoming-stream-info.json'

function create_card(img: string, title: string, description: string, time: string, video_link: string): string {
    return `
        <!-- Individual card layout slots -->
        <div class="col">
        <div class="card" style="width: 20rem">
            <h5 class="card-title text-center pt-3 pb-2"> ${Date} </h5>
            <img class="container-fluid" src="${img}">
            <div class="p-3">
               <h3 class="class-title">${title}</h3>
               <p class="card-text">${description}</p>
               <div class="container-fluid text-center">
                   <a href="${video_link}" class="container-fluid btn btn-primary">View stream!</a>
               </div>
            </div>
        </div>
        </div>
    `
}

// Defining interface for the JSON structure


// Declare variables
let img = "test"
let title = "test2"
let description = "test3"
let time = "test4"
let video_link = "test5"

// Processing JSON
console.log(schedule)
//const schedule_obj = console.log(schedule)


// TODO: Fix this typescript specific issue

const card_set = create_card(img, title, description, time, video_link)
var value
if (card_set){
    value = card_set.valueOf
}
document.getElementById('stream-schedule-cards-section')!.innerHTML() = var