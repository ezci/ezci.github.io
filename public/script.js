let links =  [].slice.call(document.getElementById('navigation').children)
links.forEach(link => {
    link.addEventListener("click", event=> {
        document.getElementById(link.attributes.href.value).scrollIntoView()
    })
})

document.querySelector(".download>span").addEventListener("click", function(e){
    var source = document.getElementsByClassName("middlec")[0].children;
    let heights = Array.prototype.slice.call(source).map(element => element.clientHeight*0.71)
    canvase = new Array(heights.length)
    let added = 0
    for(var i=0;i<source.length;i++){
        const idx = i
        let element = source[i]
        html2canvas(element).then(function (canvas) {
            canvase[idx] = canvas
            added++
            console.log(added)
            if(added === canvase.length){
                printPdf(heights, canvase)       
            }
        });    
    }
})


function printPdf(heights, canvase) {
    var doc = new jsPDF('p', 'pt', 'a4');
    var width = doc.internal.pageSize.getWidth()-20;
    var pageHeight = doc.internal.pageSize.getHeight();
    console.log("width:"+width)
    console.log("height:"+pageHeight)
    let currentHeight = 30;
    console.log(heights)
    for (var i = 0; i < canvase.length; i++) {
        var elementHeight = heights[i]
        if (currentHeight + elementHeight > pageHeight) {
            doc.addPage()
            currentHeight = 30
        }
        var img = canvase[i].toDataURL("image/png")
        doc.addImage(img, 'JPEG', 5, currentHeight, width, elementHeight)
        currentHeight += elementHeight + 30   
        console.log("currentHeight:" + currentHeight)
    }
    doc.save('resume.pdf')
    return { i, i, currentHeight }
}

function makePDF(){
    var quotes = document.getElementsByClassName("middlec")[0];
    html2canvas(quotes, {
        onrendered: function(canvas) {
        var pdf = new jsPDF('p', 'pt', 'a4');
    
        for (var i = 0; i <= quotes.clientHeight/980; i++) {
            //! This is all just html2canvas stuff
            var srcImg  = canvas;
            var sX      = 0;
            var sY      = 1120*i; // start 980 pixels down for every new page
            var sWidth  = 778;
            var sHeight = 1120;
            var dX      = 0;
            var dY      = 0;
            var dWidth  = 778;
            var dHeight = 1120;
    
            window.onePageCanvas = document.createElement("canvas");
            onePageCanvas.setAttribute('width', 778);
            onePageCanvas.setAttribute('height', 1120);
            var ctx = onePageCanvas.getContext('2d');
            // details on this usage of this function: 
            // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
            ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);
    
            // document.body.appendChild(canvas);
            var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
    
            var width         = onePageCanvas.width;
            var height        = onePageCanvas.clientHeight;
    
            //! If we're on anything other than the first page,
            // add another page
            if (i > 0) {
                pdf.addPage(595, 842); //8.5" x 11" in pts (in*72)
            }
            //! now we declare that we're working on that page
            pdf.setPage(i+1);
            //! now we add content to that page!
            pdf.addImage(canvasDataURL, 'PNG', 0, 0, (width*.72), (height*.71));
    
        }
        //! after the for loop is finished running, we save the pdf.
        pdf.save('Test3.pdf');
      }
      });
}