// bytewebster.com
// bytewebster.com
// bytewebster.com
function showSweetAlert() {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Record has been successfully deleted.',
        'success'
      )
    }
  })
}

jQuery(document).ready(function() {

  $(".chat-list a").click(function() {
      $(".chatbox").addClass('showbox');
      return false;
  });

  $(".chat-icon").click(function() {
      $(".chatbox").removeClass('showbox');
  });


});