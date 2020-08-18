//This script will allow you from a list of emails to: 
//1. Create individual copies of a Google file for each email
//2. Rename each copy by the username of the email
//3. Share each copy with a specific email
//All the copies will be made in the same folder as the original file


function copyDocs() {
  //PASTE your Google Document ID here
  //to know you google document ID : 
  //1. Open you Google file 
  //2. Paste the URL of your file, it should look something like : https://docs.google.com/spreadsheets/d/1_isDDmbL00JHGMiuJGVJHFGHFHSSAA-ULA80/edit#gid=1129867426 
  //3. The File ID is right after the "/d" and before the next "/" : 1_isDDmbL00JHGMiuJGVJHFGHFHSSAA-ULA80
  //PASTE your Google Document ID below inside the single quotations
  //Notice there are single quotations around the document ID, that is important! 
  var drive=DriveApp.getFileById('1_isDDmbL00JHGMiuJGVJHFGHFHSSAA-ULA80');
  
  //Replace the below list by your list of emails with whom you want to share the files with

	var users = ["rayanzahab@gmail.com","email2@gmail.com","email3@blabla.com"];

	for(i=0; users.length; i++){ 
		//Creating a copy of the file
		var copy = drive.makeCopy();
        //Renaming the file to the person's username : all text before @ in their email
		copy.setName("Workbook  - "+users[i].split("@")[0]);
        //Adding the email of the person as editor
		copy.addEditor(users[i]);
   
  }
}
