const form = document.querySelector("form");
const fileInput = document.querySelector("#fileInput");
const fileList = document.querySelector("#filearea");


form.addEventListener("click",function(){
    fileInput.click();
    console.log("clicked")
})

fileInput.addEventListener("change",function(event){
    const file = event.target.files[0];
    let fileName = file.name;
    const fileExtension = getfileExtension(fileName);
 const fileNameWithoutExt = getFileNameWithoutExt(fileName);
 if(fileNameWithoutExt.length>12){
    fileName = fileNameWithoutExt.slice(0,12) + "..." + fileExtension;
 }
 

 const fileIcons = {
    ".pdf": "fas fa-file-pdf",
    ".doc": "fas fa-file-word",
    ".docx": "fas fa-file-word",
    ".xls": "fas fa-file-excel",
    ".xlsx": "fas fa-file-excel",
    ".ppt": "fas fa-file-powerpoint",
    ".pptx": "fas fa-file-powerpoint",
    ".jpg": "fas fa-file-image",
    ".jpeg": "fas fa-file-image",
    ".png": "fas fa-file-image",
    ".gif": "fas fa-file-image",
    ".mp4": "fas fa-file-video",
    ".avi": "fas fa-file-video",
    ".mp3": "fas fa-file-audio",
    ".wav": "fas fa-file-audio",
    ".zip": "fas fa-file-archive",
    ".rar": "fas fa-file-archive",
    ".txt": "fas fa-file-alt",
    ".js": "fas fa-file-code",
    ".html": "fas fa-file-code",
    ".css": "fas fa-file-code",
    ".json": "fas fa-file-code"
  };
    

   // Default icon if the file type is unknown
   const fileIcon = fileIcons[fileExtension] || "fas fa-file";

   const selectedFileHTML = `<div class="row">
     <i class="${fileIcon}"></i>
     <div class="content">
       <div class="details">
         <span class="name">${fileName}</span>
       </div>
     </div>
   </div>`;
 
   fileList.innerHTML = selectedFileHTML;
})

function getFileNameWithoutExt(fileName) {
    let lastindex = fileName.lastIndexOf('.');
   return fileName.slice(0, lastindex);
}

function getfileExtension(fileName){
    return fileName.slice(fileName.lastIndexOf('.')).toLowerCase();
  }
