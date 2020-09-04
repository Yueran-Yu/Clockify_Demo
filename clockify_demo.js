const track_time_list = [
  {
    id: 1,
    title: "Why track time with Clockify",
    paragraph: "Track time you spend working on activities, see exactly where the time goes, and improve your productivity.",
    link: "Productivity →"
  },
  {
    id: 2,
    title: "Improve project profitability",
    paragraph: "Track time on projects so you can see how much time projects really take and see if you charge enough.",
    link: "Project profitability →"
  },
  {
    id: 3,
    title: "Show clients how much you've worked",
    paragraph: "Mark time records as billable and Clockify will apply your hourly rates, so you can send reports to clients for review.",
    link: "Client billing →"
  },
  {
    id: 4,
    title: "See what your team works on",
    paragraph: "Employees can quickly log time so you can track attendance and see who worked on what at a glance.",
    link: "Team management →"
  }]

window.addEventListener("DOMContentLoaded", function () {
  navButtonEffect()
  multiTrackTimeBoard(track_time_list)
  toggleHelpMessage()
})

const content_page = document.querySelector(".content_page")
const section_list = content_page.getElementsByTagName("section")
// alert(section_list.length)

for (let i = 0; i < section_list.length; i++) {
  // console.log(i%2)
  if (i % 2 !== 0) {
    section_list[i].classList.add('even_section')
  }
  else {
    section_list[i].classList.add('odd_section')
  }
}

function navButtonEffect() {
  const nav_button = document.querySelector('.nav_logo')
  const nav_bar = document.querySelector('.nav_items')
  nav_button.addEventListener('click', () => {
    // console.log("worked")
    nav_bar.classList.toggle('nav_show')
  })
}

const why_content = document.querySelector('.why_content')
function multiTrackTimeBoard(track_time_board) {
  let track_time_items = track_time_board.map(function (item) {
    return `<article class="why_track_time-item">
      <img src="" alt="">
      <h3>${item.title}</h3>
      <p class="describle_content">${item.paragraph}
      </p>
      <a class ="why_link" href="">${item.link}</a>
  </article>`
  })
  console.log(track_time_items)
  track_time_items = track_time_items.join("")
  why_content.innerHTML = track_time_items
}

function toggleHelpMessage() {
  const close_help_message = document.querySelector('.close_icon_box')
  const contact_us_box = document.querySelector('.contact_us_box')
  const help_btn = document.querySelector('.help')
  help_btn.addEventListener('click', () => {
    contact_us_box.classList.remove('hidden_box')
    help_btn.classList.add('hidden_box')
  })

  close_help_message.addEventListener('click', () =>{
    contact_us_box.classList.add('hidden_box')
    help_btn.classList.remove('hidden_box')
  } )
}



