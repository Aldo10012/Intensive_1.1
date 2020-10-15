const get_habit_name = document.querySelector('#new-habit-input');
const add_habit = document.querySelector('#new-habit-btn')



function createNewHabit() {
    const habitName = get_habit_name.value
    console.log(habitName)

    // Creating empty component with same Html as tracker
    var emptyHabit = document.getElementById('tracker').innerHTML
    // Creating the Div
    var trackerDiv = document.createElement('div')
    // assigning trackerDiv class name "tracker" so that CSS can be properly implemented
    trackerDiv.className = "tracker";
    // asigning trackerDiv same HTML as emtpy div to properly display component
    trackerDiv.innerHTML = emptyHabit

    // append component into content
    document.getElementById("content").appendChild(trackerDiv);
}


add_habit.addEventListener('click', createNewHabit )