import { generateTemplateElement } from "../template"
import style from "./style.scss"
import html from "./template.html"

const template = generateTemplateElement(html, style)

export class Card extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}