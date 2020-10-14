const get_habit_name = document.querySelector('#new-habit-input');
const add_habit = document.querySelector('#new-habit-btn')



function createNewHabit() {
    const habitName = get_habit_name.value
    console.log(habitName)

    var emptyHabit = document.getElementById('tracker').innerHTML

    // Creating the Div
    var trackerDiv = document.createElement('div')
    trackerDiv.className = "tracker";
    trackerDiv.innerHTML = emptyHabit

        //Create <p> to display the habit
        // var showHabitName = document.createElement('p')
        // showHabitName = document.createTextNode(habitName)
        // trackerDiv.appendChild(showHabitName)

        // // Create <div class='marker-row'>
        // var makerRowDiv = document.createElement('div')
        //     for (i = 1; i < 8; i++) {
        //         var input = document.createElement('input')
        //         input.setAttribute("type", "checkbox")
        //         makerRowDiv.appendChild(input)
        //     }

        // // appending makerRowDiv into trackerDiv
        // trackerDiv.appendChild(makerRowDiv)





    // append component into content
    document.getElementById("content").appendChild(trackerDiv);




}


add_habit.addEventListener('click', createNewHabit )