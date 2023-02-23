const imgInput=document.querySelector('.imageInput input');
const imgOutput=document.querySelector('.imageShow');
let imagesArray=[];

imgInput.addEventListener('change', function(){
    
    const file=imgInput.files;
    imagesArray.push(file[0]);
    displayImages();
    function displayImages(){
        let images = "";
        imagesArray.forEach((image, index)=>{
            images = images + `<img src="${URL.createObjectURL(image)}" alt="image" style="width:500px;">`;
        })
        imgOutput.innerHTML = images;
    }
    
    deleteImage();
    
});

function deleteImage(index){
    imagesArray.splice(index, 1);
    displayImages();
}