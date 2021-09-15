// const base_URL = "https://www.googleapis.com/youtube/v3"
// const API_KEY  = "AIzaSyBE3Ufj8b3tAOKLmjTHsY_jaTTAfQKp8Ms"

$(document).ready(function(){
    var API_KEY = "AIzaSyBE3Ufj8b3tAOKLmjTHsY_jaTTAfQKp8Ms"
    var video = ''

    $("#form").submit(function (event) {
    event.preventDefault()

    var search = $("#search").val()

    videoSearch(API_KEY,search,42)
    })

    function videoSearch(key,search,maxResults){

        $("#videos").empty()
        $.get("https://www.googleapis.com/youtube/v3/search?key="+ key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data){
            console.log(data)

            data.items.forEach(item => {
                video =`
                <iframe width="540" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                `
              $("#videos").append(video)
            })
        })
    }
})