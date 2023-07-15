export class Router {

    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event){

        event = event || window.event /*Pega o evento e senao pega o evento de dentro da janela*/
        event.preventDefault()
        
        window.history.pushState({}, "", event.target.href) /*aqui estou injetando um estado no historico da janela que é o alvo do evento que é o href da nossa rota*/
        
        this.handle()
                
    }
       
    handle(){
        const {pathname} = window.location
        
        const route = this.routes[pathname] || this.routes[404]
        
        
        fetch(route).then(data => data.text()).then(html => document.querySelector("#app").innerHTML = html)

        this.style(pathname)
  
    }

    style(pathname){

        console.log(pathname)
        const universe = document.querySelector(".universe")
        const home = document.querySelector(".home")
        const exploration = document.querySelector(".exploration")
        const body = document.querySelector("body")

        if(pathname == "/"){
            universe.classList.remove("nav-button-style-change")
            home.classList.add("nav-button-style-change")
            exploration.classList.remove("nav-button-style-change")

            body.style.backgroundImage = "var(--background-home)"
        }
        else if(pathname == "/universe"){
            universe.classList.add("nav-button-style-change")
            home.classList.remove("nav-button-style-change")
            exploration.classList.remove("nav-button-style-change")

            body.style.backgroundImage = "var(--background-universe)"
        
        }
        else if(pathname == "/exploration"){
            universe.classList.remove("nav-button-style-change")
            home.classList.remove("nav-button-style-change")
            exploration.classList.add("nav-button-style-change")

            body.style.backgroundImage = "var(--background-exploration)"
        }

        else{
            universe.classList.remove("nav-button-style-change")
            home.classList.remove("nav-button-style-change")
            exploration.classList.remove("nav-button-style-change")
            
            body.style.backgroundImage = "var(--background-404)"
        }
    }

}


