<?php
$q = intval($_GET['q']);

$con = mysqli_connect('MyServer','MyUser','MyPassword','Customers');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM customerslist WHERE id = '".$q."'";
$result = mysqli_query($con,$sql);

echo "<table>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr><th>CustomerID</th><td>" . $row['CustomerID'] . "</td></tr>";
    echo "<tr><th>CompanyName</th><td>" . $row['CompanyName'] . "</td></tr>";
    echo "<tr><th>ContactName</th><td>" . $row['ContactName'] . "</td></tr>";
    echo "<tr><th>Address</th><td>" . $row['Address'] . "</td></tr>";
    echo "<tr><th>City</th><td>" . $row['City'] . "</td></tr>";
    echo "<tr><th>PostalCode</th><td>" . $row['PostalCode'] . "</td></tr>";
    echo "<tr><th>Country</th><td>" . $row['Country'] . "</td></tr>";
}
echo "</table>";
mysqli_close($con);
?>