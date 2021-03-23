
// add a calendar popup to the due date
$( function() {
  $( "#datepicker" ).datepicker();
} );

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // $(".change-completed").on("click", function(event) {
  //   var id = $(this).data("id");
  //   // var newCompleted = $(this).data("newCompleted");
  //   // var newCompleted = $(this).data("completed");
  //   console.log("completed" + id);
  //   var newCompletedState = {
  //     completed: true
  //   };

  //   // Send the PUT request.
  //   $.ajax("/api/tasks/" + id, {
  //     type: "PUT",
  //     data: newCompletedState
  //   }).then(
  //     function() {
  //       console.log("changed Completed to true");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("test")
    var newTask = {
      taskDesc: $("#ta").val().trim(),
      dueDate: $("#datepicker").val(),
      completed: false
    };
    console.log(newTask);

    // Send the POST request.
    $.ajax("/api/tasks", {
      type: "POST",
      data: newTask
    }).then(
      function() {
      console.log("created new task");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});




$(document).ready(function() {
  // Container holds all of our tasks
  var taskList = $("#task-list");
  
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", deleteTask);
  $(document).on("click", "button.complete", completeTask);

  // Variable to hold our tasks
  var tasks; 

    $.get("/api/tasks", function(data) {
      console.log("Tasks", data);
      tasks = data;
      if (!tasks || !tasks.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });

  
// InitializeRows handles appending all of our constructed post HTML inside blogContainer
  function initializeRows() {
    var tasksToAdd = [];
    for (var i = 0; i < tasks.length; i++) {
      tasksToAdd.push(createNewRow(tasks[i]));
    }
    taskList.append(tasksToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(task) {

    console.log(task);

    var taskList = $("<li>");    
    var completeBtn = $("<button>");
    var deleteBtn = $("<button>");
    var newTaskDesc = $("<h3>");
    var newTaskDate = $("<small>");
    var newTaskDiv = $("<div>")

    newTaskDesc.text(task.taskDesc);
    completeBtn.text("Complete");
    completeBtn.data("taskId", task.id);
    completeBtn.addClass("complete");
    deleteBtn.text("x");
    deleteBtn.data("taskId", task.id);
    deleteBtn.addClass("delete btn btn-danger");    

    if (task.completed === false) {
      $("#incomplete").append(taskList);
      taskList.append(newTaskDesc);
      taskList.append(newTaskDiv);
      newTaskDiv.append("Due: ", newTaskDate);
      newTaskDiv.append(completeBtn);
      
    } else {
      $("#complete").append(taskList);
      taskList.append(newTaskDesc);
      taskList.append(deleteBtn);
    }    

    newTaskDesc.text(task.taskDesc);
    newTaskDate.text(task.dueDate);
  }


  function completeTask() {
    // $(".change-completed").on("click", function(event) {
      var id = $(this).data("taskId");
      // var newCompleted = $(this).data("newCompleted");
      // var newCompleted = $(this).data("completed");
      console.log("complete", id);
      var newCompletedState = {
        completed: true
      };
  
      // Send the PUT request.
      $.ajax("/api/tasks/" + id, {
        type: "PUT",
        data: newCompletedState
      }).then(
        function() {
          console.log("changed Completed to true");
          // Reload the page to get the updated list
          location.reload();
        }
      );
  }

  function deleteTask() {
      var id = $(this).data("taskId");
      console.log("delete", id);
  
      // Send the delete request.
      $.ajax("/api/tasks/" + id, {
        type: "DELETE",
      }).then(
        function() {
          location.reload();
        }
      );
  }

  // This function figures out which post we want to edit and takes it to the appropriate url
  // function handleTaskEdit() {
  //   var currentTask = $(this).data("id");
  //   console
  //   window.location.href = "/cms?post_id=" + currentTask.id;
  // }

//   // This function displays a message when there are no posts
//   function displayEmpty(id) {
//     var query = window.location.search;
//     var partial = "";
//     if (id) {
//       partial = " for Author #" + id;
//     }
//     blogContainer.empty();
//     var messageH2 = $("<h2>");
//     messageH2.css({ "text-align": "center", "margin-top": "50px" });
//     messageH2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
//     "'>here</a> in order to get started.");
//     blogContainer.append(messageH2);
//   }

});
  