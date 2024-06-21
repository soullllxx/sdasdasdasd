var cartItems = [];

function addToCart(productName, price, quantityId) {
  var quantityInput = document.getElementById(quantityId);
  var quantity = parseInt(quantityInput.value);

  if (quantity > 0) {
    var totalPrice = price * quantity;
    var item = {
      productName: productName,
      price: price,
      quantity: quantity,
      totalPrice: totalPrice
    };

    cartItems.push(item);
    quantityInput.value = '';

    updateCartTable();
    updateTotalPrice();
  }
}

function updateCartTable() {
  var cartTable = document.getElementById('cartTable');
  cartTable.innerHTML = '';

  var headerRow = document.createElement('tr');
  headerRow.innerHTML = '<th>المنتج</th><th>السعر</th><th>الكمية</th><th>السعر الإجمالي</th>';
  cartTable.appendChild(headerRow);

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];

    var row = document.createElement('tr');
    row.innerHTML = '<td>' + item.productName + '</td>' +
                    '<td>' + item.price + ' ل.س</td>' +
                    '<td>' + item.quantity + '</td>' +
                    '<td>' + item.totalPrice + ' ل.س</td>';

    cartTable.appendChild(row);
  }
}

function updateTotalPrice() {
  var totalPrice = 0;

  for (var i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].totalPrice;
  }

  var totalPriceElement = document.getElementById('totalPrice');
  totalPriceElement.textContent = totalPrice;
}


function validateForm(event) {
  event.preventDefault();

  var fullNameInput = document.getElementById('fullName');
  var nationalIdInput = document.getElementById('nationalId');
  var provinceSelect = document.getElementById('province');
  var birthdateInput = document.getElementById('birthdate');
  var mobileNumberInput = document.getElementById('mobileNumber');
  var captchaInput = document.getElementById('captcha');

  var fullName = fullNameInput.value;
  var nationalId = nationalIdInput.value;
  var province = provinceSelect.value;
  var birthdate = birthdateInput.value;
  var mobileNumber = mobileNumberInput.value;
  var captcha = captchaInput.value;

  // إجراء التحقق من البيانات هنا والتعامل معها وفقاً لاحتياجاتك

  // مثال بسيط للتحقق من الصيغة الصحيحة للبريد الإلكتروني
  var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(email)) {
    fullNameInput.classList.add('error');
    return;
  }


  
  // إذا تم التحقق من جميع البيانات بنجاح، يمكن إرسال النموذج
  document.getElementById('purchaseForm').submit();

}

  // إتمام الشراء
  function checkout() {
    // تنفيذ إجراءات إتمام الشراء هنا
    alert("  يرجى إكمال نموذج الطلب   ");
    
    function submitForm(event) {
      event.preventDefault();
      // إعادة تهيئة الحقول هنا
      // إرسال الطلب هنا
      document.getElementById("requestForm").reset();
    }

  }

  function checkout1() {

    cartItems = [];
    totalPrice = 0;
    cartTable=0;
    document.getElementById("cart").innerHTML = "";
    document.getElementById("totalPrice").innerHTML = totalPrice;
    document.getElementById("cartTable").innerHTML = '<th>المنتج</th><th>السعر</th><th>الكمية</th><th>السعر الإجمالي</th>';
    
      
  }
  
  var code;
function createCaptcha() {
  //clear the contents of captcha div first  
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}
function validateCaptcha() {
  event.preventDefault();
  debugger
  if (document.getElementById("cpatchaTextBox").value == code) {
    alert("Valid Captcha")
  }else{
    alert("Invalid Captcha. try Again");
    createCaptcha();
  }}


    
  



