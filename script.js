document.addEventListener("DOMContentLoaded", function () {
    const cube = document.querySelector(".cube");

    let tapCount = 0;

    cube.addEventListener("click", function () {
        tapCount++;

        if (tapCount % 2 === 0) {
            cube.classList.add("scale-bounce"); // Add new animation on second tap
        } else {
            cube.classList.remove("scale-bounce"); // Remove on third tap
        }
    });
});
