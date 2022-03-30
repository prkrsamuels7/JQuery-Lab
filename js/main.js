

// $('.entry').remove();

$('.add-skill-btn').on('click', function() {
  if($('.input-field').val() === '') return;
  let $newSkill = $('.input-field').val();
  let $newEntry = `
    <div class="entry">
      <button class="delete-entry-btn">x</button>
			<h4>${$newSkill}</h4>
		</div>`;
  $('.list').append($newEntry);
  $('.input-field').val('');
});



$('.main > .list').on('click', 'button', function() {
  $(this).closest('div').remove();
})

