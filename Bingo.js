function generateTable() {
  var num = document.getElementById("num").value;
  var table = document.getElementById("bingoTable");
  document.getElementById("num").style.display = "none";
  document.getElementsByTagName("label")[0].style.display = "none";
  document.getElementsByTagName("button")[0].style.display = "none";
  var note = document.getElementById("note");
  note.style.display = "block";
  table.innerHTML = "";
  var usedNums = []; // تعريف المصفوفة لتخزين الأرقام المستخدمة مسبقًا
  for (var i = 0; i < num; i++) {
    var row = table.insertRow(i);
    for (var j = 0; j < num; j++) {
      var cell = row.insertCell(j);
      cell.classList.add("cell");
      cell.innerHTML = Math.floor(Math.random() * num * num) + 1; // استخدام الدالة للحصول على رقم عشوائي فريد
      
      // اضافة حدث النقر على الخلية (cell)
      cell.addEventListener("click", function () {
        // تعديل خصائص الخلية المحددة
        this.style.backgroundColor = "red"; // تغيير خلفية الخلية التالفة
        this.style.textDecoration = "line-through"; // إضافة خط على النص الذي يحوي الرقم العشوائي
      });
    }
  }
  var bingoLetters = document.querySelectorAll("h1 span");
  bingoLetters.forEach(function (bingoLetter) {
    bingoLetter.addEventListener("click", function () {
      bingoLetter.classList.toggle("active");
    });
  });
  function getUniqueRandomNumber() {
    var randomNum = Math.floor(Math.random() * 100); // الحصول على رقم عشوائي
  
    if (usedNums.indexOf(randomNum) !== -1) { // التحقق من وجود الرقم العشوائي في المصفوفة
      return getUniqueRandomNumber(); // إعادة استدعاء الدالة للحصول على رقم آخر في حالة وجود رقم مكرر
    } else {
      usedNums.push(randomNum); // إضافة الرقم العشوائي إلى المصفوفة في حالة عدم وجوده مسبقًا
      return randomNum; // إرجاع الرقم العشوائي الجديد
    }
  }
}
