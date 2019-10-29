import Routes from "./routes"

class Router {
  private routes: Record<string, Function> = {}
  private router: Routes

  public add(routes: Record<string, Function>): void {
    this.routes = Object.assign({}, this.routes, routes)
    this.router = new Routes(routes)
  }

  public route(path: string): any {
    return this.router.route(path)
  }
}

export default new Router()
