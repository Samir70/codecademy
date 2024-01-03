The list of superglobals in PHP includes the following:

```php
    $GLOBALS
    $_SERVER
    $_GET
    $_POST
    $_FILES
    $_COOKIE
    $_SESSION
    $_REQUEST
    $_ENV
```
For this lesson, we are focusing on three of these:

```php
    $_GET - this contains an associative array of variables passed to the current script using query parameters in the URL
    $_POST - this contains an associative array of variables passed to the current script using a form submitted using the “POST” method
    $_REQUEST - this contains the contents of $_GET, $_POST, and $_COOKIE (useful if you do n0t care which method was used by the client)
```
