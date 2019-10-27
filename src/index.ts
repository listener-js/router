import router from "rlite-router"

class Router {
  private routes: Record<string, Function> = {}
  private router: (path: string) => any

  public add(routes: Record<string, Function>): void {
    this.routes = Object.assign({}, this.routes, routes)
    this.router = router(this.routes["404"], routes)
  }

  public route(path: string): any {
    return this.router(path)
  }
}

export default new Router()
