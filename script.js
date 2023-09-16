// Get references to HTML elements
const assignmentList = document.getElementById("assignment-list");
const reminderList = document.getElementById("reminder-list");
const assignmentInput = document.getElementById("assignment-input");
const reminderInput = document.getElementById("reminder-input");

// Function to add an assignment
function addAssignment() {
    const assignmentText = assignmentInput.value.trim();
    if (assignmentText !== "") {
        const listItem = document.createElement("li");
        const checkboxId = `assignment-checkbox-${Date.now()}`;
        const assignmentTimeId = `assignment-time-${Date.now()}`;
        listItem.innerHTML = `
            <input class="assignment-checkbox" onclick="todaysdate(this)" id="${checkboxId}" type="checkbox">
            <label for="${checkboxId}" id="assignment-label">${assignmentText}</label>
            <p class="assignment-time" id="${assignmentTimeId}"></p>
        `;
        assignmentList.appendChild(listItem);
        assignmentInput.value = "";
    }
}

// Function to add a reminder
function addReminder() {
    const reminderText = reminderInput.value.trim();
    if (reminderText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${reminderText}</span>
            <button class="delete-button" onclick="deleteReminder(this)">Delete</button>
        `;
        reminderList.appendChild(listItem);
        reminderInput.value = "";
    }
}

// Function to delete a reminder
function deleteReminder(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

// To add current time
function SetDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() - 2000;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    
    return `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function todaysdate(checkbox) {
    const assignmentTimeId = `assignment-time-${checkbox.id.split('-')[2]}`;
    const assignmentTimeElement = document.getElementById(assignmentTimeId);
    
    if (checkbox.checked) {
        assignmentTimeElement.innerText = SetDate();
    } else {
        assignmentTimeElement.innerText = '';
    }
}

// Event listeners for adding assignments and reminders
assignmentInput.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        document.getElementById('assignment-btn').click();
    }
});

reminderInput.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        document.getElementById('reminder-btn').click();
    }
});
