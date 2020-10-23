namespace Components {
  export class Header {
    constructor() {
      const node = document.createElement('h1')
      node.append('Header')
      document.body.appendChild(node)
    }
  }

  export class Body {
    constructor() {
      const node = document.createElement('h1')
      node.append('Body')
      document.body.appendChild(node)
    }
  }

  export class Footer {
    constructor() {
      const node = document.createElement('h1')
      node.append('Footer')
      document.body.appendChild(node)
    }
  }
}
