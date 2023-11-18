<!DOCTYPE html>

<!-- Student Name: Vladimir Todorov
	 Student ID: 40203170
	 Assignment: 3
	 Concordia University -->

<html>
	<body>
		<?php
			function verifyUser($username, $password, $filename) {
				$loginhandle = fopen($filename, 'r');
				if ($loginhandle) {
					while (($line = fgets($loginhandle)) !== false) {
						$line = trim($line);
						$fields = explode(':', $line);
						if (count($fields) == 2 && $fields[0] == $username && $fields[1] == $password) {
							fclose($loginhandle);
							return true;
						}
					}
					fclose($loginhandle);
				}
				return false;
			}
			
			function registerUser($username, $password, $filename) {
				$loginhandle = fopen($filename, 'a');
				if ($loginhandle) {
					fwrite($loginhandle, "$username:$password\n");
					fclose($loginhandle);
					return true;
				}
				return false;
			}	
		?>
	</body>
</html>	