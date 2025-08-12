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


/* select */
$("#userReason").change(() => {
  $("#mainPlaseholder").addClass("hidden")
})


/* validate */
const validate = new JustValidate('#mainModal', {
    validateBeforeSubmitting: true,
});
validate
  .addField('#userName', [
    {
      rule: 'required',
      errorMessage: 'Поле Имя обязательно к заполнению',
    },
    {
      rule: 'customRegexp',
      value: /^[А-Я\s\-]+$/i,      
      errorMessage: 'Поле Имя должно содержать только кириллицу, пробелы и дефисы',
    },    
    {
      rule: 'minLength',
      value: 2,      
      errorMessage: 'Поле Имя должно иметь минимум 2 символа',
    },    
  ])
  .addField('#userPhone', [
    {
      rule: 'required',
      errorMessage: 'Поле Телефон обязательно к заполнению',
    },    
    {
        rule: 'customRegexp',
        value: /[0-9]/,      
        errorMessage: 'Поле Телефон должно содержать только цифры',
    },
    {
      rule: 'minLength',
      value: 11,      
      errorMessage: 'Поле Телефон должно иметь минимум 11 символов',
    }
  ])
  .addField('#userEmail', [
    {
      rule: 'required',
      errorMessage: 'Поле Email обязательно к заполнению',
    },
    {
      rule: 'email',
      errorMessage: 'Введите корректный email адрес',
    }
]);


/* submit form */
const token = "7928469961:AAHT1gppJpIZPZLltJkm_UQcnhvL5sjGw2o"
const chat_id = "-4878197828"
const url = `https://api.telegram.org/bot${token}/sendMessage`

document.getElementById("mainModal").addEventListener("submit", function (e) {
    e.preventDefault();

    if(validate.isValid) {
    $("#submitModal").addClass("opacity-50 cursor-not-allowed").prop('disabled', true)
    let message = `<b>Заявка с сайта.</b>\n`;
    message += `<b>Причина обращения: </b> ${this.userReason .value}`;
    message += `<b>Отправитель: </b> ${this.userName.value}\n`;
    message += `<b>Номер телефона: </b> ${this.userPhone.value}\n`;
    message += `<b>Email: </b> ${this.userEmail .value}`;

    axios.post(url, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.userName.value = ""
        this.userPhone.value = ""
        this.userEmail.value = ""
        this.userReason.value = ""
        $("#success").show(500)
        setTimeout(() => {
            $("#success").hide(500)
        }, 3000);
        $("#mainModal").hide(500)
        $("#overlayModal").hide(500)
        $("#submitModal").removeClass("opacity-50 cursor-not-allowed").prop('disabled', false)
        $("#mainPlaseholder").removeClass("hidden")
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Конец');
    })            
    }
})