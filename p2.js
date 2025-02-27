function displayImage() {
    const imgElement = document.getElementById("displayedImage");
    const inputLetter = document.getElementById("charInput").value.toUpperCase();

    const imageMap = {
        A: "images/A.png",
        B: "images/B.png",
        C: "images/C.png",
        D: "images/D.png",
        E: "images/E.png",
        F: "images/F.png",
        G: "images/G.png",
        H: "images/H.png",
        I: "images/I.png",
        J: "images/J.png",
        K: "images/K.png",
        L: "images/L.png",
        M: "images/M.png",
        N: "images/N.png",
        O: "images/O.png",
        P: "images/P.png",
        Q: "images/Q.png",
        R: "images/R.png",
        S: "images/S.png",
        T: "images/T.png",
        U: "images/U.png",
        V: "images/V.png",
        W: "images/W.png",
        X: "images/X.png",
        Y: "images/Y.png",
        Z: "images/Z.png",
    };
    


    if (imageMap[inputLetter]) {
        imgElement.src = imageMap[inputLetter];
        imgElement.style.display = "block";
    } else {
        alert("Please enter a valid letter (A-Z)!");
        imgElement.style.display = "block";
    }
}

