console.log("Hello from style.js");

$('#myForm').on('submit', function(event) {
  event.preventDefault();
  var newTask = $('#inputBox').val();
  $('#task-list').append('<li><span class="item">' + newTask + '</span><a class="edit">edit</a></li>');
  $('#inputBox').val('');
  var ulLength = ($('li').length);
  $('#count').html(ulLength);
});

$('#clear').click(function() {
  $('li').remove();
  $('#count').html(0);
});

$('#task-list').on("click", "li", function() {
	$(this).wrap("<strike>");
	$(this).addClass("done");
  var tasksLeft = $('#task-list li').not('.done').length;
  $('#count').html(tasksLeft);
});

$('#task-list').on("hover", ".edit", function() {
  console.log("it works");
});

