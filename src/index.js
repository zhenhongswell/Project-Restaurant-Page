import loadPageHome from './Home.js'
import {loadPageMenu} from'./Menu.js'
const content = document.querySelector('#content')
console.log(content)

loadPageHome(content)
loadPageMenu(content)