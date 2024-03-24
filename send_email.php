

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email body
    $email_body = "Nombre: $full_name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Teléfono: $phone_number\n";
    $email_body .= "Asunto: $subject\n";
    $email_body .= "Mensaje:\n$message";

    // Send email
    $to = "jonischimansky@gmail.com";
    $headers = "From: $email";
    if (mail($to, $subject, $email_body, $headers)) {
        // Redirection after sending
        echo json_encode(["status" => "success"]);
    } else {
        // Redirection to error page
        echo json_encode(["status" => "error"]);
    }
} else {
    // Redirection to error page
    echo json_encode(["status" => "error"]);
}
?>

