let links =  [].slice.call(document.getElementById('navigation').children)
links.forEach(link => {
    link.addEventListener("click", event=> {
        document.getElementById(link.attributes.href.value).scrollIntoView()
    })
})