export const generateTemplateElement = (html: string, style: string,) => {
  const element = document.createElement('template')
  element.innerHTML = `<style>${style}</style>${html}`
  return element
}