console.log("Hello back to school!")

const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

// Function to log workbok information

function logWorkbookInformation() {
    //get the actual workbook
    workbook = viz.workbook;
    console.log(`The workbook name is ${workbook.name}`);

    // get the array of dashboards within the workbook
    let sheets = workbook.publishedSheetsInfo;
    sheets.forEach((element) => {
        index = element.index;
        console.log(`The sheet with index ${index} is ${element.name}`);
    });

    // find the currently active sheet
    vizActiveSheet = workbook.activeSheet;
    console.log(`The currently active sheet is ${vizActiveSheet.name}`);

    // finding all the worksheets within the active sheet
    listSheets = vizActiveSheet.worksheets;
    listSheets.forEach((element) => {
        index = element.index;
        worksheetName = element.name;
        console.log(`The worksheet with index ${index} is called ${worksheetName}`);
    });
}

viz.addEventListener("firstinteractive", logWorkbookInformation)