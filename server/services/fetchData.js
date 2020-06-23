const puppeteer = require('puppeteer');

module.exports = fetchData = async function() {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('http://cb.dut.udn.vn/PageLichThiKH.aspx');
  let rowSelector = "#MainContent_Panel_LichThiKH > table > tbody > tr"
  let cellSelector = "#MainContent_Panel_LichThiKH > table > tbody > tr:nth-child(3) > td"
  let cellIndexSelector = "#MainContent_Panel_LichThiKH > table > tbody > tr:nth-child(ROW_INDEX) > td:nth-child(CELL_INDEX)"

  let rowLength = await page.evaluate((sel) => {
    return document.querySelectorAll(sel).length
  }, rowSelector)

  let cellLength = await page.evaluate((sel) => {
    return document.querySelectorAll(sel).length
  }, cellSelector)
  let table = []
  for(let i = 2; i < rowLength; i++) {
    let row = cellIndexSelector.replace("ROW_INDEX", i)
    let rowValue = []
    for(let j = 1; j < cellLength; j++) {
      let col = row.replace("CELL_INDEX", j)
      let cellValue = await page.evaluate((sel) => {
        let cell = document.querySelector(sel)
        if(cell) return cell.innerText
      }, col)
      rowValue.push(cellValue)
    }
    table.push(rowValue)
  }

  rowSelector = "#MainContent_Panel_ThiChung > table > tbody > tr"
  cellSelector = "#MainContent_Panel_ThiChung > table > tbody > tr:nth-child(3) > td"
  cellIndexSelector = "#MainContent_Panel_ThiChung > table > tbody > tr:nth-child(ROW_INDEX) > td:nth-child(CELL_INDEX)"

  let generalTable = []
  rowLength = await page.evaluate((sel) => {
    return document.querySelectorAll(sel).length
  }, rowSelector)

  cellLength = await page.evaluate((sel) => {
    return document.querySelectorAll(sel).length
  }, cellSelector)
  console.log(cellLength)
  for(let i = 2; i < rowLength; i++) {
    let row = cellIndexSelector.replace("ROW_INDEX", i)
    let rowValue = []
    for(let j = 1; j < cellLength+1; j++) {
      let col = row.replace("CELL_INDEX", j)
      let cellValue = await page.evaluate((sel) => {
        let cell = document.querySelector(sel)
        //if(j == cellLength) cell.
        if(cell) return cell.innerText
      }, col)
      rowValue.push(cellValue)
    }
    generalTable.push(rowValue)
  }
  let roomReg = new RegExp(/(\w[0-9]{3})/g)
  var groupRows = []
  generalTable.forEach((row) => {
    if(row[cellLength - 1]) {
      let rooms = row[cellLength - 1].match(roomReg)
      rooms.forEach(room => {
        let newRow = row
        newRow[cellLength - 1] = room
        groupRows.push(newRow)
      })
    }
  })
  generalTable = groupRows

  await browser.close();

  return {table, generalTable}
}
