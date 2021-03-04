class searchElements {
  inputId = () => { return '[data-testid=page-home-input]' }
  btnSearch = () => { return '[data-testid=page-home-button]' }
  validateSearch = () => { return 'h1' }
  msgError = () => { return '.error' }
}

export default searchElements
