var loginname = 'admin';
var loginpass = 'admin';

var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (request.readyState == 4) {
        if (request.status == 200) {
            var response = JSON.parse(request.responseText);
            handlers[response._id](response);
        }
        if (request.status == 404) {
            var json = JSON.parse(request.responseText);
            if (json.reason === "no_db_file") {

            } else {
                var url = request.responseURL;
                var i = url.lastIndexOf("/", url.length - 1);
                var name = url.substring(i + 1);
                handlers[name]({ "_id": name });
            }
        }
    }
};


function get(variable) {
    request.open("GET", dburl + variable, false);
    request.setRequestHeader("Authorization", "Basic " + btoa(loginname + ":" + loginpass));
    request.send();
}

function update() {
    for (var name in handlers) {
        get(name);
    }
}

// request updates at a fixed interval (ms)
var intervalID = setInterval(update, 1000);

///////////////////////////////////////////////////////////////////////////////
// your code below

var dbname = "mensainfolink";
var dburl = "http://127.0.0.1:5984/" + dbname + "/";
var handlers = {
    "secondUser": updateSecondUser,
};

import { startSecondUser, stopSecondUser } from './script.js';
function updateSecondUser(response) {
    if (response.enabled) {
        startSecondUser(60);
    } else {
        stopSecondUser();
    }
}

export function sendStopSecondUser() {
    fetch(`${dburl}secondUser`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + btoa(`${loginname}:${loginpass}`),
        }),
    })
        .then(response => response.json())
        .then(currentDocument => {
            // Update the data with the current revision
            const updatedData = {
                _id: currentDocument._id,
                _rev: currentDocument._rev,
                enabled: false,
            };

            // Perform the update
            return fetch(dburl, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(`${loginname}:${loginpass}`),
                }),
                body: JSON.stringify(updatedData),
            });
        })
        .then(response => response.json())
        .then(result => {
            console.log('Document updated successfully:', result);
        })
        .catch(error => {
            console.error('Error updating document:', error);
        });
}