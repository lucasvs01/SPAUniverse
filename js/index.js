import {Router} from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle() //estou dizendo que quero disparar essa function na window
window.onclick = () => router.route() //estou dizendo que quero disparar essa function na window


