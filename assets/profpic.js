var photo = document.querySelector('photo');
var image = document.querySelector('#image');
var file = document.querySelector('#file');
var ds = document.querySelector('#ds');

file.addEventListener('change', function(){
    var choosefile = this.files[0];

    if (choosefile){
        var reader = new FileReader();
        reader.addEventListener('load', function(){
            image.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosefile);
    }
})