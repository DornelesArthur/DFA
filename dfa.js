$(document).ready(function () {
  $("#sidebar-wrapper").hide();
  $(".collum_z").addClass('success'); 
  $(".row_q0").addClass('error'); 
  
  
});

function change() {
    $(".row_q0").removeClass('error');
  var token = document.getElementById("token").value.slice(-1);
  if (analyzer.current_state != "Error") {
    var new_state = analyzer.dfa.get(analyzer.current_state).get(token);
  }
  var current_state = analyzer.current_state;
  if (this.old_length == undefined) {
    this.old_length = 0;
  }

  if (document.getElementById("token").value.length < this.old_length) {
    analyzer.current_state = analyzer.path_stack.pop();
  } else if (document.getElementById("token").value.length > this.old_length) {
    if (token == " ") {
      console.log(
        "Estado final = ".concat(analyzer.final_state == analyzer.current_state)
      );
      if (analyzer.final_state == analyzer.current_state) {
        swal("Sucesso!", "Palavra Válida!", "success");
      } else {
        swal("Falha!", "Palavra Inválida!", "error");
      }
      analyzer.current_state = analyzer.start_state;
      document.getElementById("token").value = "";
      for (let i = 0; i < analyzer.path_stack.length; i++) {
        let item = analyzer.path_stack.pop();
        console.log({ i, item, length: analyzer.path_stack.length });
      }
    } else {
      analyzer.path_stack.push(current_state);
      if (analyzer.current_state != "Error") {
        if (new_state != undefined) {
          analyzer.current_state = new_state;
        } else {
          analyzer.current_state = "Error";
        }
      }
    }
  }
  this.old_length = document.getElementById("token").value.length;
}

function hide() {
  var x = document.getElementById("words");
  if ($("#sidebar-wrapper").is(":hidden")) {
    $("#sidebar-wrapper").show();
  } else {
    $("#sidebar-wrapper").hide();
  }
}

function Lexical_Analyzer() {
  this.path_stack = [];
  this.start_state = "q0";
  this.final_state = "q37";
  this.current_state = "q0";

  this.dfa = new Map();
  var linha = new Map();
  // Q0
  linha.set("d", "q1");
  linha.set("s", "q2");
  linha.set("u", "q3");
  linha.set("w", "q5");
  this.dfa.set("q0", new Map(linha));
  linha.delete("d");
  linha.delete("s");
  linha.delete("u");
  linha.delete("w");
  // Q1
  linha.set("e", "q6");
  linha.set("o", "q7");
  this.dfa.set("q1", new Map(linha));
  linha.delete("e");
  linha.delete("o");
  // Q2
  linha.set("i", "q10");
  linha.set("t", "q11");
  linha.set("w", "q12");
  this.dfa.set("q2", new Map(linha));
  linha.delete("i");
  linha.delete("t");
  linha.delete("w");
  // Q3
  linha.set("n", "q16");
  this.dfa.set("q3", new Map(linha));
  linha.delete("n");
  // Q4
  linha.set("n", "q20");
  this.dfa.set("q4", new Map(linha));
  linha.delete("n");
  // Q5
  linha.set("h", "q13");
  this.dfa.set("q5", new Map(linha));
  linha.delete("h");
  // Q6
  linha.set("f", "q17");
  linha.set("l", "q19");
  this.dfa.set("q6", new Map(linha));
  linha.delete("f");
  linha.delete("l");
  // Q7
  linha.set("u", "q21");
  this.dfa.set("q7", new Map(linha));
  linha.delete("u");
  // Q8
  linha.set("u", "q28");
  this.dfa.set("q8", new Map(linha));
  linha.delete("u");
  // Q9
  linha.set("u", "q26");
  this.dfa.set("q9", new Map(linha));
  linha.delete("u");
  // Q10
  linha.set("g", "q4");
  linha.set("z", "q18");
  this.dfa.set("q10", new Map(linha));
  linha.delete("g");
  linha.delete("z");
  // Q11
  linha.set("a", "q22");
  linha.set("r", "q8");
  this.dfa.set("q11", new Map(linha));
  linha.delete("a");
  linha.delete("r");
  // Q12
  linha.set("i", "q23");
  this.dfa.set("q12", new Map(linha));
  linha.delete("i");
  // Q13
  linha.set("i", "q25");
  this.dfa.set("q13", new Map(linha));
  linha.delete("i");
  // Q14
  linha.set("i", "q30");
  this.dfa.set("q14", new Map(linha));
  linha.delete("i");
  // Q15
  linha.set("i", "q34");
  this.dfa.set("q15", new Map(linha));
  linha.delete("i");
  // Q16
  linha.set("s", "q14");
  this.dfa.set("q16", new Map(linha));
  linha.delete("s");
  // Q17
  linha.set("a", "q9");
  this.dfa.set("q17", new Map(linha));
  linha.delete("a");
  // Q18
  linha.set("e", "q27");
  this.dfa.set("q18", new Map(linha));
  linha.delete("e");
  // Q19
  linha.set("e", "q24");
  this.dfa.set("q19", new Map(linha));
  linha.delete("e");
  // Q20
  linha.set("e", "q32");
  this.dfa.set("q20", new Map(linha));
  linha.delete("e");
  // Q21
  linha.set("b", "q25");
  this.dfa.set("q21", new Map(linha));
  linha.delete("b");
  // Q22
  linha.set("t", "q15");
  this.dfa.set("q22", new Map(linha));
  linha.delete("t");
  // Q23
  linha.set("t", "q29");
  this.dfa.set("q23", new Map(linha));
  linha.delete("t");
  // Q24
  linha.set("t", "q31");
  this.dfa.set("q24", new Map(linha));
  linha.delete("t");
  // Q25
  linha.set("l", "q31");
  this.dfa.set("q25", new Map(linha));
  linha.delete("l");
  // Q26
  linha.set("l", "q35");
  this.dfa.set("q26", new Map(linha));
  linha.delete("l");
  // Q27
  linha.set("o", "q33");
  this.dfa.set("q27", new Map(linha));
  linha.delete("o");
  // Q28
  linha.set("c", "q35");
  this.dfa.set("q28", new Map(linha));
  linha.delete("c");
  // Q29
  linha.set("c", "q36");
  this.dfa.set("q29", new Map(linha));
  linha.delete("c");
  // Q30
  linha.set("g", "q4");
  this.dfa.set("q30", new Map(linha));
  linha.delete("g");
  // Q31
  linha.set("e", "q37");
  this.dfa.set("q31", new Map(linha));
  linha.delete("e");
  // Q32
  linha.set("d", "q37");
  this.dfa.set("q32", new Map(linha));
  linha.delete("d");
  // Q33
  linha.set("f", "q37");
  this.dfa.set("q33", new Map(linha));
  linha.delete("f");
  // Q34
  linha.set("c", "q37");
  this.dfa.set("q34", new Map(linha));
  linha.delete("c");
  // Q35
  linha.set("t", "q37");
  this.dfa.set("q35", new Map(linha));
  linha.delete("t");
  // Q36
  linha.set("h", "q37");
  this.dfa.set("q36", new Map(linha));
  linha.delete("h");
  // Q37
  this.dfa.set("q37", new Map());

  //   console.log(this.dfa);

  //   console.log(this.dfa.get("q0").get("d"));
  //   console.log(this.dfa.get("q0").get("-") == undefined);
}

var analyzer = new Lexical_Analyzer();
