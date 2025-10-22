document.getElementById("calc").addEventListener("click", () => {
  const exp = parseFloat(document.getElementById("exp").value);
  const rate = parseFloat(document.getElementById("rate").value);

  const totalMinutes = exp / rate;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);

  let resultText = "";
  if (hours > 0) resultText += `${hours} 小時 `;
  resultText += `${minutes} 分鐘`;

  document.getElementById("result").innerText = `需要約 ${resultText}`;
});
