$(document).ready(function () {
    $("#registrationForm").on("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Serialize the form data
        const formData = $(this).serialize();

        // Send the form data to the PHP backend
        $.post("submit.php", formData, function (data) {
            // Display the response with animation
            $("#result").hide().html(data).fadeIn(500);
        });
    });
});
