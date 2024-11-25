document.getElementById("saveButton").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Format the data as plain text
  const textData = `Name: ${name}\nEmail: ${email}`;

  // Create a Blob with the text data
  const blob = new Blob([textData], { type: "text/plain" });

  // Create a download link
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "form-data.txt"; // Name of the downloaded file

  // Trigger the download
  link.click();

  // Cleanup
  URL.revokeObjectURL(link.href);
});
