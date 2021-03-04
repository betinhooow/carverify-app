class infoElements {
  //XP_clickTab = (tabName) => { return `//ul/li/span[contains(.,'${tabName}')]` }
  validateMsg = () => { return '.hzxtFn' }
  tabName = (tab) => { return `(//li)//div[contains(.,'${tab}')]` }
  validaTabInfo = (info) => { return `//label[@data-testid='page-carverify-tab-label'][contains(.,'${info}')]` }
  ValidateFirstTab = () => { return '(//li)[1]//div' }
}

export default infoElements
