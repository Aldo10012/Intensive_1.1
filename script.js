const get_habit_name = document.querySelector('#new-habit-input');
const add_habit = document.querySelector('#new-habit-btn')



function createNewHabit() {
    const habitName = get_habit_name.value
    console.log(habitName)

    var newDiv = document.createElement("div");
    var newP = document.createElement('p')
    
    newP.innerHTML('hello')
    newDiv.appendChild(newP)
    //newP.innerHTML('hello')

    // var textnode = document.createTextNode("Water");
    // node.appendChild(textnode);
    // document.getElementById("myList").appendChild(node);
}


add_habit.addEventListener('click', createNewHabit )