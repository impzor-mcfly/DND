document.getElementById('enter').onclick = function () { enterPage() };

document.getElementById('backButton').onclick = function () { seePlanes() };

mainPlane = document.getElementById('mainPlane')

cover = document.getElementById('preview')
background = document.getElementById('firt-plane')

gallery = document.getElementById('gallery')
planes = document.getElementsByClassName('plane')

for (var plane of planes) {
    plane.addEventListener('mouseover', function () {
        console.log(plane);
    })
}

function enterPage() {

    cover.style.transform = `scale(30)`
    cover.style.opacity = `0`
    cover.style.visibility = "hidden";
}

function seePlanes() {
    mainPlane.style.width = '0';
    for (var plane of planes) {
        plane.style.width = '100%'
    }

    
}