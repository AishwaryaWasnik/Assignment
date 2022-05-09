const input1 = document.getElementById("No1")
const input2 =document.getElementById("No2");

const inputsValue = () => {
    if(input1.value==="" || input2.value===""){
        alert("Please enter the values in inputs")
    }

}
const add = () => {
    inputsValue()
  let result = parseFloat(input1.value) + parseFloat(input2.value);

  document.getElementById("result").innerHTML = result;
};
const sub = () => {
    inputsValue()
    let result = parseFloat(input1.value) - parseFloat(input2.value);
    document.getElementById("result").innerHTML = result;
};
const mul = () => {
    inputsValue()
    let result = parseFloat(input1.value) * parseFloat(input2.value);
    document.getElementById("result").innerHTML = result;
};
const div = () => {
    inputsValue()
    let result = parseFloat(input1.value) / parseFloat(input2.value);
    document.getElementById("result").innerHTML = result;
};
const Clear = () => {
    input1.value = "";
    input2.value = "";
    document.getElementById("result").innerHTML = "";
};
