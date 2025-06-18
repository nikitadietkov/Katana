let windows = document.querySelectorAll(".main > div");

windows.forEach(el => {
    const height = el.clientHeight;
    const width = el.clientWidth;
    el.addEventListener("mousemove", function (event) {
        const mouseX = event.layerX;
        const mouseY = event.layerY;
        const rotationY = (25 * ((mouseX - width / 2) / width));
        const rotationX = -1*(25 * ((mouseY - height / 2) / height));

        el.style.transform = `perspective(500px) scale(1.05) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        el.style.zIndex = "1";
    });

    el.addEventListener("mouseout", function() {
        el.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`;
        el.style.zIndex = "0";
    
    })
})

let openedElements = null;
document.querySelectorAll(".navbar > li").forEach(el => {
    el.addEventListener("click", () => {
        document.querySelectorAll(".sublist").forEach(sublist => {
            sublist.style.left = "-30vw";
        });

        let list = event.target.querySelector(".sublist");
        list.style.left = "0";
        if (openedElements === list) {
            list.style.left = "-30vw";
            openedElements = null;
        } else {
            openedElements = list;
        }
    })
})