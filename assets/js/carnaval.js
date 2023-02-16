jQuery(document).ready(function ($) {
   $('#input').on('keyup input', function () {
      filter($(this));
   });

   $('#city').change(function () {
      filter($(this));
   });

   function filter(value) {
      let text = value.val().toUpperCase();

      $('#myList .card').each(function () {
         if ($(this).html().toUpperCase().indexOf(text) === -1) {
            $(this).hide("slow");
         } else {
            $(this).show("slow");
         }
      });
   }
});