/* mobile menu */
$("#toggler, #overlay").click(() => {
    $("#menu").toggleClass("max-lg:top-0 max-lg:top-full max-lg:-translate-y-full")
    $("#overlay").toggleClass("max-lg:hidden")
})


/* modal */
$(".openMainModal").each((i, el) => {
    $(el).click(() => {
        $("#mainModal").show(500)
        $("#overlayModal").show(500)
    })
})

$("#closeModal, #overlayModal").click(() => {
    $("#mainModal").hide(500)
    $("#overlayModal").hide(500)
})