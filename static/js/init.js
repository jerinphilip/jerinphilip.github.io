$(document).ready(function() {
    $("table").addClass("table");
    $("blockquote").addClass("blockquote");
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    anchors.add();
});

