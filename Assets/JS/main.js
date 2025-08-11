/* mobile menu */
$("#toggler, #overlay").click(() => {
    $("#menu").toggleClass("max-lg:top-0 max-lg:top-full max-lg:-translate-y-full")
    $("#overlay").toggleClass("max-lg:hidden")
})


/* modal */
$(".openMainModal").each((i, el) => {
    $(el).click(() => {
        $("#mainModal").removeClass("hidden")
        $("#overlayModal").removeClass("hidden")
    })
})

$("#closeModal, #overlayModal").click(() => {
    $("#mainModal").addClass("hidden")
    $("#overlayModal").addClass("hidden")
})