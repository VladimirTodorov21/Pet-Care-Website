<!DOCTYPE html>

<!-- Student Name: Vladimir Todorov
	 Student ID: 40203170
	 Assignment: 3
	 Concordia University -->

<html>
	<body>
		<?php
			function searchPetForm($Criteria, $filename) {
				$PetInfo = [];
				$file = fopen($filename, 'r');
				if ($file) {
					$headers = fgetcsv($file);
					while (($PetRow = fgetcsv($file)) !== false) {
						$PetInfo = [];
						foreach ($PetRow as $i => $value) {
							$PetInfo[$headers[$i]] = $value;
						}
						if (matchesPetForm($PetInfo, $Criteria)) {
							$PetInfo[] = $PetInfo;
						}
					}
					fclose($file);
				}
				return $PetInfo;
			}

			function matchesPetForm($PetInfo, $Criteria) {
				foreach ($Criteria as $field => $value) {
					if (!empty($value) && stristr($PetInfo[$field], $value) === false) {
						return false;
					}
				}
				return true;
			}
		?>
	</body>
</html>