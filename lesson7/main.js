let options={
    root:null,
    rootMargin: "0px",
    threshold:0.5
    }
    //create call back function
    let callback=(entries,observer) =>{
        entries.forEach(entry => {
            if(entry.isIntersecting && entry.target.className==="image"){

                let imageUrl =entry.target.getAttribute("data-src");
                if(imageUrl){
                    entry.target.src=imageUrl;
                    observer.unobserver(entry.target);
                }
            }
            
        });
        
    }
let observer = new IntersectionObserver(callback,options)
observer.observe(document.querySelector("#image1"));
observer.observe(document.querySelector("#image2"));
observer.observe(document.querySelector("#image3"));
observer.observe(document.querySelector("#image4"));
observer.observe(document.querySelector("#image5"));
observer.observe(document.querySelector("#image6"));
observer.observe(document.querySelector("#image7"));