$(document).ready(()=>{

    $('#menu').hide()

    $('#menu_icon').click(()=>{
        $('#menu').slideDown()
        $('#arrows').hide()
        // $('#menu').slidedown(2000)
    })
    
    $('#close_icon').click(()=>{
        $('#menu').slideUp()
        $('#arrows').show()
    })

    // $('#card_details_1').hide()

    // $('#main_1').mouseleave(()=>{
    //     $('#card_details_1').slideUp(2000)
    // })
    
    // $('#main_1').mouseenter(()=>{
    //     $('#card_details_1').slideDown(2000)
    // })

    // $('#card_details_2').hide()

    // $('#main_2').mouseleave(()=>{
    //     $('#card_details_2').slideUp(2000)
    // })
    
    // $('#main_2').mouseenter(()=>{
    //     $('#card_details_2').slideDown(2000)
    // })

    // $('#card_details_3').hide()

    // $('#main_3').mouseleave(()=>{
    //     $('#card_details_3').slideUp(2000)
    // })
    
    // $('#main_3').mouseenter(()=>{
    //     $('#card_details_3').slideDown(2000)
    // })

    // $('#card_details_4').hide()

    // $('#main_4').mouseleave(()=>{
    //     $('#card_details_4').slideUp(2000)
    // })
    
    // $('#main_4').mouseenter(()=>{
    //     $('#card_details_4').slideDown(2000)
    // })
})

var image = document.getElementById("slider_images")
        var sources = ["media/slider1.jpg" , "media/slider2.jpg" , "media/slider3.jpg"]
        var i = 0
        function next() {
            i++
            if (i >= sources.length) {
                i = 0
            }
            image.setAttribute("src" , sources[i])  
        }
        function previous() {
            i--
            if (i < 0) {
                i  = sources.length-1
            }
            image.setAttribute("src" , sources[i])  
}