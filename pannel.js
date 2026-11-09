
let fieldTypes = {
    text: "TXT",
    singleFile: "SINGLE_FILE",
    multipleFiles: "MUILT_FILE",
    multiContent: "MULTIPLE_CONTENT",
    
}

let fields = {
    "projects": {
        type: fieldTypes.multiContent,
        valueFieldType: {
            "project-name": {
                type: fieldTypes.text,
                value: null
            },
            "project-thumbnail": {
                type: fieldTypes.singleFile,
              allowedFormats: {
            'image/png': 'png',
  'image/webp': 'webp',
  'video/mp4': 'mp4',
  'image/gif': 'gif',
        },
        valueFile: null
            }
        },
        valueFields: [

        ],

    },
"introduction-heading-1": {
type: fieldTypes.text,
        value: null
},
"thumbnail": {
    type: fieldTypes.singleFile,
        allowedFormats: {
            'image/png': 'png',
  'image/webp': 'webp',
  'video/mp4': 'mp4',
  'image/gif': 'gif',
        },
        valueFile: null
},
"image-gallery": {
    type: fieldTypes.multipleFiles,
        allowedFormats: {
            'image/png': 'png',
  'image/webp': 'webp',
  'video/mp4': 'mp4',
  'image/gif': 'gif',
        },
        valueFiles: []
},
"image-gallery-2": {
    type: fieldTypes.multipleFiles,
        allowedFormats: {
            'image/png': 'png',
  'image/webp': 'webp',
  'video/mp4': 'mp4',
  'image/gif': 'gif',
        },
        valueFiles: []
}
};
let internalFiles = {};

function isFromAllowedFormats(file , allowedFormats) {
  const ext = file.name.split('.').pop().toLowerCase();
  return allowedFormats[file.type] === ext;
}

function generateGuid() {
  var cryptoObj = (typeof window !== 'undefined' && (window.crypto || window.msCrypto)) ||
                  (typeof self !== 'undefined' && (self.crypto || self.msCrypto)) ||
                  null;

  // 1. Native implementation (modern browsers, secure contexts)
  if (cryptoObj && typeof cryptoObj.randomUUID === 'function') {
    return cryptoObj.randomUUID();
  }

  var bytes = new Array(16);

  // 2. Cryptographically strong randomness (IE11, older Chrome/Firefox/Safari)
  if (cryptoObj && typeof cryptoObj.getRandomValues === 'function' &&
      typeof Uint8Array !== 'undefined') {
    var arr = new Uint8Array(16);
    cryptoObj.getRandomValues(arr);
    for (var i = 0; i < 16; i++) bytes[i] = arr[i];
  } else {
    // 3. Fallback for very old browsers (IE9 and below): Math.random
    for (var j = 0; j < 16; j++) bytes[j] = Math.floor(Math.random() * 256);
  }

  // Set version (4) and variant (RFC 4122) bits
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  var hex = [];
  for (var k = 0; k < 16; k++) {
    hex.push((bytes[k] + 0x100).toString(16).substring(1));
  }

  return hex[0] + hex[1] + hex[2] + hex[3] + '-' +
         hex[4] + hex[5] + '-' +
         hex[6] + hex[7] + '-' +
         hex[8] + hex[9] + '-' +
         hex[10] + hex[11] + hex[12] + hex[13] + hex[14] + hex[15];
}
const inputHistory = new WeakMap(); // input -> { undo: [], redo: [] }

function getHistory(input) {
  if (!inputHistory.has(input)) {
    inputHistory.set(input, { undo: [input.value], redo: [] });
  }
  return inputHistory.get(input);
}

// capture the starting value when the user first focuses an input
document.addEventListener("focusin", (e) => {
  if (e.target.matches("._input-text-container input")) getHistory(e.target);
});

// record each change
document.addEventListener("input", (e) => {
  const input = e.target;
  if (!input.matches("._input-text-container input")) return;
  if (e.isComposing) return;
  const h = getHistory(input);
  if (h.undo[h.undo.length - 1] === input.value) return;
  h.undo.push(input.value);
  h.redo.length = 0;
});

// keeps focus/keyboard when tapping undo/redo
document.addEventListener("pointerdown", (e) => {
  if (e.target.closest("._undo-text, ._redo-text")) e.preventDefault();
});

window.addEventListener("click" , async (e) => {
let target = e.target;
if (target.classList.contains("_toggle-dark-mode") 
|| target.closest("._toggle-dark-mode")) {
toggleTheme(true)
}
else if (target.classList.contains("_toggle-light-mode") 
    || target.closest("._toggle-light-mode")) {
    toggleTheme(false)
}
else if (target.classList.contains("_token-save-btn") 
    || target.closest("._token-save-btn")) {
let token = activeLayout.querySelector("._github-token").value.trim();
localStorage.setItem("token" , token);
}
else if (target.classList.contains("_undo-text") 
    || target.closest("._undo-text")) {
  let input = target.closest("._input-text-container").querySelector("input");
  const h = getHistory(input);
  if (h.undo.length > 1) {
    h.redo.push(h.undo.pop());
    input.value = h.undo[h.undo.length - 1];
  }
}
else if (target.classList.contains("_redo-text") 
    || target.closest("._redo-text")) {
  let input = target.closest("._input-text-container").querySelector("input");
  const h = getHistory(input);
  if (h.redo.length) {
    const val = h.redo.pop();
    h.undo.push(val);
    input.value = val;
  }
}
else if (target.classList.contains("_image-preview") 
    || target.closest("._image-preview")) {
  let container = target.closest("._image-preview-container");
  if (container.classList.contains("_image-preview--open")) 
    container.classList.remove("_image-preview--open")
else 
    container.classList.add("_image-preview--open")
}
else if (target.classList.contains("_preview-image-src") 
    || target.closest("._preview-image-src")) {
  let img = target instanceof HTMLImageElement ? target.src :
  target.querySelector("img").src;
  if (img) 
    img = target.closest("._preview-image-src").src;
// img is src use it to preview

}
else if (target.classList.contains("_gallery-input-image-preview-action") 
    || target.closest("._gallery-input-image-preview-action")) {
  let task = (target.classList.contains("_gallery-input-image-preview-action") ? 
target : target.closest("._gallery-input-image-preview-action"))
.getAttribute("data-task");
if (task == "DELETE") {
    // delete this image that is in gallary
    let name = target.closest("._image-preview-container").querySelector("._image-preview h1 span").textContent;
   let deleteConfirm = confirm(`Are you sure you want to delete "${name}" image?`);
   if (deleteConfirm) {
   let code = target.closest("._input-gallery-file").getAttribute("data-code");
  let guid = target.closest("._image-preview-container").getAttribute("data-guid");
  let fieldData = fields[code];
  fieldData.valueFiles = fieldData.valueFiles.filter(i => i != guid);
  delete internalFiles[guid];
    target.closest("._image-preview-container").remove();
    document.querySelectorAll(`*[data-code="${code}"] ._single-image-picker-input-container`)
.forEach(ele => {
    if (fieldData.valueFiles.length > 0) {

        if (!ele.classList.contains("_single-image-picker-input-container--picked"))
            ele.classList.add("_single-image-picker-input-container--picked")
    }
    else {
            ele.classList.remove("_single-image-picker-input-container--picked")

    }
    ele.querySelector("._single-file-picker-picked-content ._text").textContent = 
    `(${fieldData.valueFiles.length}) Files picked`
})
   }
}

}
else if (target.classList.contains("_modals-container-closer")
|| target.closest("._modals-container-closer")) {
    modalAction(false)
}

});

function toggleTheme(dark = true) {
if (dark) {
    document.querySelectorAll("._theme-toggle")
    .forEach(ele => {
        if (!ele.classList.contains("_dark--active")) {
            
            ele.classList.add("_dark--active")
            ele.classList.remove("_light--active")
        }
        
            
    })
document.body.classList.remove("theme--light")
document.body.classList.add("theme--dark")
    return;
}
document.querySelectorAll("._theme-toggle")
    .forEach(ele => {
        if (!ele.classList.contains("_light--active")) {
            
            ele.classList.add("_light--active")
            ele.classList.remove("_dark--active")
        }
        
            
    })
    document.body.classList.remove("theme--dark")
    document.body.classList.add("theme--light")
    
}
let githubToken = null;
document.addEventListener("LayoutLoad" , (data) => {
    let existingToken = localStorage.getItem("token");
    if (existingToken) {

        githubToken = existingToken
        document.querySelectorAll("._github-token").forEach(e => e.value = githubToken)
    }
    else
    githubToken = activeLayout.querySelector("._github-token").value.trim();
    
})


document.addEventListener("change" , (e) => {
    let input = e.target;
    if (input.matches(`input[type="file"]`)) {
        // a file change has been detected
        let files = input.files;
        if (!files) return;
        if (input.classList.contains("_input-image-preview-picker")) {
            let image = files[0];
            let code = input.closest("._input-single-file").getAttribute("data-code");
            let fieldData = fields[code];
            // if not matched then it is just considered a file
            if (isFromAllowedFormats(image , fieldData.allowedFormats)) {
                let guid = generateGuid();  
                internalFiles[guid] = files[0]
                fieldData.valueFile = guid

       if (image.type.startsWith("image/") )  {
                   let name = image.name;
        let src = URL.createObjectURL(image)     
        
document.querySelectorAll(`*[data-code="${code}"]`).forEach(inp => {
    
let isMobile  = !inp.closest(".layout-desktop");
let uiElement = ui_inputImagePreview(name , src, isMobile);
inp.querySelector("._input-image-preview-container").innerHTML = ""
inp.querySelector("._input-image-preview-container").appendChild(uiElement)
});

document.querySelectorAll(`*[data-code="${code}"] ._single-image-picker-input-container`)
.forEach(ele => {
    if (!ele.classList.contains("_single-image-picker-input-container--picked"))
        ele.classList.add("_single-image-picker-input-container--picked")
})


               }
               else if (image.type.startsWith("video/")) {
                let name = image.name;
        
     
document.querySelectorAll(`*[data-code="${code}"]`).forEach(inp => {
    
let isMobile  = !inp.closest(".layout-desktop");
let uiElement = ui_inputImagePreview(name , "./single-video-icon.png", isMobile);
inp.querySelector("._input-image-preview-container").innerHTML = ""
inp.querySelector("._input-image-preview-container").appendChild(uiElement)
});

document.querySelectorAll(`*[data-code="${code}"] ._single-image-picker-input-container`)
.forEach(ele => {
    if (!ele.classList.contains("_single-image-picker-input-container--picked"))
        ele.classList.add("_single-image-picker-input-container--picked")
})
return;
               }
               else {
                       let name = image.name; 
document.querySelectorAll(`*[data-code="${code}"]`).forEach(inp => {
    
let isMobile  = !inp.closest(".layout-desktop");
let uiElement = ui_inputImagePreview(name , "./single-file-icon.png", isMobile);
inp.querySelector("._input-image-preview-container").innerHTML = ""
inp.querySelector("._input-image-preview-container").appendChild(uiElement)
});

document.querySelectorAll(`*[data-code="${code}"] ._single-image-picker-input-container`)
.forEach(ele => {
    if (!ele.classList.contains("_single-image-picker-input-container--picked"))
        ele.classList.add("_single-image-picker-input-container--picked")
})
return;
               }
            }
               else {
                
             alert(`${Object.values(fieldData.allowedFormats).join(", ")} are only allowed formats`)
               }
      
        }
     else if (input.classList.contains("_input-gallery-image-preview-picker")) {
            
            let code = input.closest("._input-gallery-file").getAttribute("data-code");
            let fieldData = fields[code];
            Array.from(files).forEach(file => {

            
            // if not matched then it is just considered a file
            if (isFromAllowedFormats(file , fieldData.allowedFormats)) {
                let guid = generateGuid();
                internalFiles[guid] = file;
                fieldData.valueFiles.push(guid)
     if (file.type.startsWith("image/")) {

               
        let name = file.name;
        let src = URL.createObjectURL(file)       
      
document.querySelectorAll(`*[data-code="${code}"]`).forEach(inp => {
    
let isMobile  = !inp.closest(".layout-desktop");

let uiElement = ui_inputGalleryImagePreview(name , src, isMobile , guid);
inp.querySelector("._input-image-preview-container").appendChild(uiElement)
});

document.querySelectorAll(`*[data-code="${code}"] ._single-image-picker-input-container`)
.forEach(ele => {
    if (!ele.classList.contains("_single-image-picker-input-container--picked"))
        ele.classList.add("_single-image-picker-input-container--picked")
    ele.querySelector("._single-file-picker-picked-content ._text").textContent = 
    `(${fieldData.valueFiles.length}) Files picked`
})
               }
               else if (file.type.startsWith("video/")) {
                
        let name = file.name;
        
        
document.querySelectorAll(`*[data-code="${code}"]`).forEach(inp => {
    
let isMobile  = !inp.closest(".layout-desktop");

let uiElement = ui_inputGalleryImagePreview(name , "./single-video-icon.png", isMobile , guid);
inp.querySelector("._input-image-preview-container").appendChild(uiElement)
});

document.querySelectorAll(`*[data-code="${code}"] ._single-image-picker-input-container`)
.forEach(ele => {
    if (!ele.classList.contains("_single-image-picker-input-container--picked"))
        ele.classList.add("_single-image-picker-input-container--picked")
      ele.querySelector("._single-file-picker-picked-content ._text").textContent = 
    `(${fieldData.valueFiles.length}) Files picked`
})
               }

               else {
  let name = file.name;
        
      
document.querySelectorAll(`*[data-code="${code}"]`).forEach(inp => {
    
let isMobile  = !inp.closest(".layout-desktop");

let uiElement = ui_inputGalleryImagePreview(name , "./single-file-icon.png", isMobile , guid);
inp.querySelector("._input-image-preview-container").appendChild(uiElement)
});

document.querySelectorAll(`*[data-code="${code}"] ._single-image-picker-input-container`)
.forEach(ele => {
    if (!ele.classList.contains("_single-image-picker-input-container--picked"))
        ele.classList.add("_single-image-picker-input-container--picked")
      ele.querySelector("._single-file-picker-picked-content ._text").textContent = 
    `(${fieldData.valueFiles.length}) Files picked`
})
               }
            }
          
               else {
              alert(`${Object.values(fieldData.allowedFormats).join(", ")} are only allowed formats. "${file.name}" is not from the mentioned formats`)
               }
               })
        }
        else if (input.classList.contains("_replace-gallery-image-preview")) {
            let image = files[0];
            let code = input.closest("._input-gallery-file").getAttribute("data-code");
            let fieldData = fields[code];
            let guid = input.closest("._image-preview-container").getAttribute("data-guid");
         
         
            if (isFromAllowedFormats(files[0] , fieldData.allowedFormats)) {
                internalFiles[guid] = files[0];

if (files[0].type.startsWith("image/")) {
 let name = image.name;
        let src = URL.createObjectURL(image)       
let previews = document.querySelectorAll(`._image-preview-container[data-guid="${CSS.escape(guid)}"]`);


let loadedImagesCount = 0;

previews.forEach(preview => { 
  let img = preview.querySelector("img");
  
  URL.revokeObjectURL(img.src);
  img.src = src;
  preview.querySelector("._image-preview h1 span").textContent = name;

    img.addEventListener("load" , () => {
    if ((previews.length - 1)  ==  loadedImagesCount ) {
URL.revokeObjectURL(src)
    }
    else {
        loadedImagesCount += 1;
    }
})

})


}
else if (files[0].type.startsWith("video/")) {
let name = image.name;
          
let previews = document.querySelectorAll(`._image-preview-container[data-guid="${CSS.escape(guid)}"]`);




previews.forEach(preview => { 
  let img = preview.querySelector("img");
  img.src = "./single-video-icon.png";
  preview.querySelector("._image-preview h1 span").textContent = name;

   
})

}
else {
    let name = image.name;
          
let previews = document.querySelectorAll(`._image-preview-container[data-guid="${CSS.escape(guid)}"]`);




previews.forEach(preview => { 
  let img = preview.querySelector("img");
  img.src = "./single-file-icon.png";
  preview.querySelector("._image-preview h1 span").textContent = name;

   
})
}
            }
            else {

alert(`${Object.values(fieldData.allowedFormats).join(", ")} are only allowed formats`)
            }
               
       

        }
    }
})
function ui_inputImagePreview(name , src , phone = false) {
if (phone) {

    return;
}
let parent = document.createElement("section");
parent.className = "input-image-preview _image-preview-container";
parent.innerHTML = `
   <section class="title-head _image-preview">
        
        <h1><i class="fa-solid fa-angle-right"></i> ${name}</h1>
    </section>
    <img src="${src}" class="_preview-image-src" alt="">
`;
return parent;


}
function ui_inputGalleryImagePreview(name , src , phone = false , id) {
if (phone) {

    return;
}
let parent = document.createElement("section");
parent.setAttribute("data-guid" , id);
parent.className = "input-image-preview _image-preview-container";
parent.innerHTML = `
   <section class="title-head _image-preview">
        
        <h1><i class="fa-solid fa-angle-right"></i> <span>${name}</span></h1>
    </section>
    <img src="${src}" class="_preview-image-src" alt="">
    <section class="input-image-preview-controls _controls">
        <button class="delete _gallery-input-image-preview-action" data-task="DELETE">
            <i class="fa-solid fa-trash"></i>
            
        </button>
        <button class="replace">
            <input type="file" class="_replace-gallery-image-preview" data-task="REPLACE">
<i class="fa-solid fa-repeat"></i>
            <span>Replace</span>
        </button>
    </section>
`;
return parent;


}
function modalAction(state = false, modalName) {
if (state && modalName) {
    let modals = document.querySelectorAll("._modal");
    modals.forEach(modal => {
        if (modal.getAttribute("data-modal-name") == modalName)  {

            modal.style.display = "flex";
            let container = modal.closest("._modals-container");
            if (!container.classList.contains("_modals-container--open")) {
                container.classList.add("_modals-container--open")
            }
        }
        else 
            modal.style.display = "none";
    })
    
    return;
}    

let modals = document.querySelectorAll("._modal");
    modals.forEach(modal => {
            modal.style.display = "none";
    })
    let modalsContainer = document.querySelectorAll("._modals-container");
    modalsContainer.forEach(mc =>
        
         mc.classList.remove("_modals-container--open"));

    return;

}


function getData() {

let textFields = Object.entries(fields).filter(([key , f]) => f.type == fieldTypes.text);
let data = {};
textFields.forEach(([key , field]) => {
let text = activeLayout.querySelector(`*[data-code="${key}"] input`).value.trim();
// getting text now correctly think for structure now how it should be sent to github repository
})
}


modalAction(true , "content-modal")
