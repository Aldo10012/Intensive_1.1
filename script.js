const get_habit_name = document.querySelector('#new-habit-input');
const add_habit = document.querySelector('#new-habit-btn')

// const habitName = get_habit_name.value

function createNewHabit() {
    const habitName = get_habit_name.value

    if (habitName.length === 0) {
        console.log('none')
        console.log(habitName)
    } else {
        //Creating empty component with same Html as tracker
        var emptyHabit = document.getElementById('tracker').innerHTML
        
        // Creating the Div
        var trackerDiv = document.createElement('div')

        // assigning trackerDiv class name "tracker" so that CSS can be properly implemented
        trackerDiv.className = "tracker";

        // asigning trackerDiv same HTML as emtpy div to properly display component
        trackerDiv.innerHTML = emptyHabit;

        // create variable equal to get_habit_name set from input
        var displayHabitName = document.getElementById('display-habit-name')

        // push get_habit_name into displayHabitName
        displayHabitName.innerHTML = get_habit_name.value;

        // append component into content
        document.getElementById("content").appendChild(trackerDiv);
        console.log(habitName)
    }   
}

add_habit.addEventListener('click', createNewHabit )