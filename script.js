$(document).ready(function () {
    // Define the URL of your Google Apps Script web app for retrieving data
    var googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbx1udrb4mAbVCJD7rX_v0-W0am4NBFBOiqnHWkzn6m3Rklv_Fo8ebjQW3dLvjrHl3ejjw/exec';

    // Fetch data from the Google Apps Script web app
    $.getJSON(googleAppsScriptUrl, function (data) {
        // Display the data on the webpage
        displayData(data);
    });

    // Function to display data on the webpage
    function displayData(data) {
        var dataContainer = $('#data-container');
        dataContainer.empty(); // Clear previous data

        // Create a table
        var table = $('<table>');
        var headerRow = $('<tr>');
        // Assuming the first row contains headers
        for (var key in data[0]) {
            headerRow.append($('<th>').text(key));
        }
        table.append(headerRow);

        // Iterate through the data and add rows to the table
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var tableRow = $('<tr>');
            for (var key in row) {
                tableRow.append($('<td>').text(row[key]));
            }
            table.append(tableRow);
        }

        // Append the table to the data container
        dataContainer.append(table);
    }
});
