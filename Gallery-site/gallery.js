/*Name this external file gallery.js*/
var originalHTML = document.getElementById("image").innerHTML;
const originalImage = document.getElementById("image").style.backgroundImage;

function upDate(previewPic){
    let content = "url('" + previewPic.src + "')";

    console.log(content);

    document.getElementById("image").style.backgroundImage = content;
    document.getElementById("image").innerHTML = previewPic.alt;



	}

	function unDo(){
     /* In this function you should
    1) Update the url for the background image of the div with the id = "image"
    back to the orginal-image.  You can use the css code to see what that original URL was

    2) Change the text  of the div with the id = "image"
    back to the original text.  You can use the html code to see what that original text was
    */

     document.getElementById("image").innerHTML = originalHTML;

	}
