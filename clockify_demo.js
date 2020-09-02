window.addEventListener('load', function () {

  const content_page = document.querySelector(".content_page")
  const section_list = content_page.getElementsByTagName("section")
  // alert(section_list.length)


  for (let i = 0; i < section_list.length; i++) {
    // console.log(i%2)
    if (i%2 !== 0) {
      section_list[i].classList.add('even_section')
    }
  }
})