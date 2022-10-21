// 侧滑栏相关

let body = document.body
let isOnComputer = false
var mouse_X, mouse_Y

let show_btn = document.querySelector('.show-sidebar')
let sidebar = document.querySelector('.sidebar')
let menus = document.querySelector('.menu').children
let views = document.querySelector('main').children
let isOpenSidebar = false


body.onmousemove = function (event) {
    var event = event || window.event

    if (event.offsetX || event.offsetY) {
        mouse_X = event.offsetX
        mouse_Y = event.offsetY
    }
    else if (event.layerX || event.layerY) {
        mouse_X = event.layerX
        mouse_Y = event.layerY
    }

    if (body.offsetWidth > 980) {
        isOnComputer = true
    }
    else {
        isOnComputer = false
    }

    if (isOnComputer && mouse_X < 105) {
        sidebar.classList.add('sidebar-active')
        show_btn.classList.add('active')
        isOpenSidebar = true
    }
    else if (isOnComputer && mouse_X > 210) {
        sidebar.classList.remove('sidebar-active')
        show_btn.classList.remove('active')
        isOpenSidebar = false
    }
}


show_btn.onclick = () => {
    if (isOpenSidebar) {
        sidebar.classList.remove('sidebar-active')
        show_btn.classList.remove('active')
    }
    else {
        sidebar.classList.add('sidebar-active')
        show_btn.classList.add('active')
    }
    isOpenSidebar = !isOpenSidebar
}



for (let i = 0; i < menus.length; i++) {
    menus[i].onclick = () => {
        for (let j = 0; j < menus.length; j++) {
            menus[j].className = ''
            views[j].className = ''
        }
        menus[i].className = 'pitch-on'
        views[i].className = 'pitch-on'
        if (!isOnComputer) {
            show_btn.click()
        }
    }
}
