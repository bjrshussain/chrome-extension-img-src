document.addEventListener("DOMContentLoaded", async()=>{
   
    // img tag in doc
    let image_tag = document.getElementById("image")

    // fetch a random photo from unsplash
    const get_random_photo = async () => {
        const resp = await fetch(process.env.url, {
            method: "GET",
            // needs authorization for public endpoints with client id
            headers: new Headers({
                'Authorization': `Client-ID ${process.env.client_id}`
            })
        })
        const data = (await resp.json()).urls
        let image = new Object()
        image = { ...image, small: data.thumb, medium: data.small, large: data.regular }
        image_tag.src = image.large
    }

    // copt text actions
    const copy_btn = document.getElementById("button")

    // copy text logic
    const copy_text = (html_element)=>{
        if(!html_element){
            return
        }
        const text = html_element.src;
    
        let temp_elem = document.createElement('input')
        temp_elem.setAttribute('value', text)
        document.body.appendChild(temp_elem)
        temp_elem.select()
        document.execCommand('copy')
        temp_elem.parentNode.removeChild(temp_elem)

    }

    // onclick event for copy btn
    document.querySelector("#button").onclick = ()=>{
        const img_tag = document.querySelector("#image")
        copy_text(img_tag)
    }
})
