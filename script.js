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

        // Iterate through the data and display it
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var rowHtml = '<p>' + JSON.stringify(row) + '</p>';
            dataContainer.append(rowHtml);
        }
    }
});
