let num = 0
let val;
displayData = async () => {

  let url = `https://quizapi.io/api/v1/questions?apiKey=OFmzW8HX7zbGu2cqKiT20M56y6jhUBX1UfLCALj6&${limit = 20}`
  let response = await fetch(url)
  let data = await response.json()
  console.log(data)

  document.getElementById('Q').innerHTML = data[num].question;

  document.getElementById('a').innerHTML = data[num].answers.answer_a;
  document.getElementById('b').innerHTML = data[num].answers.answer_b;
  document.getElementById('c').innerHTML = data[num].answers.answer_c;
  document.getElementById('d').innerHTML = data[num].answers.answer_d;


  document.getElementById("langunge").innerText = data[num].category;
  val = document.getElementById("level").innerText = data[num].difficulty;

  changeColor()


  // i did not fixed this error . when you are click submit button then not not your select option but show correct option;
  document.getElementById('btn').addEventListener('click', showAnswer = () => {
    document.getElementById("showAnswer").style.display = "block"
    if (data[num].correct_answers.answer_a_correct == 'true') {
      document.getElementById('answer').innerHTML = "(a)" + data[num].answers.answer_a;

    }
    else
      if (data[num].correct_answers.answer_b_correct == 'true') {
        document.getElementById('answer').innerHTML = "(b)" + data[num].answers.answer_b;
      }
      else
        if (data[num].correct_answers.answer_c_correct == 'true') {
          document.getElementById('answer').innerHTML = "(c)" + data[num].answers.answer_b;
        }
        else
          if (data[num].correct_answers.answer_d_correct == 'true') {
            document.getElementById('answer').innerHTML = "(d)" + data[num].answers.answer_d;
          }

  })


  document.getElementById("next").addEventListener("click", nextQuestion = () => {
    if (num == limit) {
      alert("No more Question Avaible")
    }
    else {
      num = num + 1;
      document.getElementById('Q').innerHTML = data[num].question;

      document.getElementById('a').innerHTML = data[num].answers.answer_a;
      document.getElementById('b').innerHTML = data[num].answers.answer_b;
      document.getElementById('c').innerHTML = data[num].answers.answer_c;
      document.getElementById('d').innerHTML = data[num].answers.answer_d;

      document.getElementById("langunge").innerHTML = data[num].category;
      document.getElementById("level").innerText = data[num].difficulty;

      document.getElementById("number").innerText = num + 1;
    }

    changeColor()
    document.getElementById('answer').innerHTML = ''
    document.getElementById('selectAnswer').innerHTML = ''
    document.getElementById("showAnswer").style.display = "none"

  })

}
displayData()


yourAnswer = () => {

  let op1 = document.getElementsByName("option");
  for (let i = 0; i < op1.length; i++) {
    if (op1[i].checked == true) {
      document.getElementById('selectAnswer').innerHTML = op1[i].label
    }
    console.log(op1[i].label)
  }
}

unchecked = () => {
  let op1 = document.getElementsByName("option");
  for (let i = 0; i < op1.length; i++) {
    op1[i].checked = false
  }
}
// i did not fixed this error . when click i next question then not change  of difficuly lavel color
changeColor = () => {
  let color;
  switch (val) {
    case "Easy":
      color = "#11f01c"
      break;

    case "Medium":
      color = "#d1a206"
      break;

    case "Hard":
      color = "#f00a0a"
      break;

    default:
      color = "black"
      break;
  }
  document.getElementById("level").style.color = color;

}
